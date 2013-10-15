########################################################################
# ProcessImages.py
#
# Process images to make icons, thumbnails, and other sized images.
#
# Copyright (C) 2013 By Don Hopkins.
# All rights reserved.
#
########################################################################
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http:##www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
########################################################################


########################################################################
# Imports


import sys
import os
import math
import simplejson
import Image
import pyexiv2
from fractions import Fraction


########################################################################
# Globals


PictureSize = 1024
ThumbnailSize = 300
IconSize = 120

LociProjectsDir = '.'
LociProjectPicturesFile = 'loci-pictures.js'
ImageFileExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']

ExifRotations = {
    1: 0,
    3: 180,
    6: 90,
    8: 270
}


########################################################################
# Utilities


def ScanLociProjects():
    lociProjects = [
        fileName
        for fileName in os.listdir(LociProjectsDir)
        if os.path.isdir(
                os.path.join(
                    LociProjectsDir,
                    fileName))
    ]
    return lociProjects


def ScanProjectORiginalImages(projectName):

    originalImagesDir = os.path.join(
        LociProjectsDir,
        projectName,
        'images/originals')

    allFiles = os.listdir(originalImagesDir)
    originalImages = [
        fileName
        for fileName in allFiles
        if (os.path.splitext(fileName)[1].lower() in ImageFileExtensions)
    ]

    return originalImages


def ProcessLociImages(argv):

    args = argv[1:]
    if args:
        lociProjects = [args[0]]
        inputFiles = args[1:]
    else:
        lociProjects = ScanLociProjects()
        inputFiles = []

    for lociProject in lociProjects:

        print "Processing Loci project", lociProject

        originalImagesDir = os.path.join(
            LociProjectsDir,
            lociProject,
            'images/originals')

        pictureImagesDir = os.path.join(
            LociProjectsDir,
            lociProject,
            'images/pictures')

        thumbnailImagesDir = os.path.join(
            LociProjectsDir,
            lociProject,
            'images/thumbnails')

        iconImagesDir = os.path.join(
            LociProjectsDir,
            lociProject,
            'images/icons')

        if inputFiles:
            originalImages = inputFiles
            inputFiles = []
        else:
            originalImages = [
                fileName
                for fileName in os.listdir(originalImagesDir)
                if (os.path.splitext(fileName)[1].lower() in ImageFileExtensions)
            ]

        picturesDict = {}

        for originalImageName in originalImages:

            originalFileName = os.path.join(
                originalImagesDir,
                originalImageName)

            originalFileNameBase, originalFileNameExtensions = \
                os.path.splitext(
                    originalImageName.lower())

            newFileName = originalFileNameBase + '.jpg'

            pictureFileName = os.path.join(
                pictureImagesDir, newFileName)
            thumbnailFileName = os.path.join(
                thumbnailImagesDir, newFileName)
            iconFileName = os.path.join(
                iconImagesDir, newFileName)

            try:
                original = Image.open(originalFileName)
            except Exception, e:
                print "Error opening image file", originalFileName, "exception", e
                continue

            print "    ", originalFileName
            metadata = pyexiv2.metadata.ImageMetadata(originalFileName)
            metadata.read();

            orientation = metadata.get('Exif.Image.Orientation')
            if orientation:
                orientation = int(str(orientation).split("=")[1][1:-1])
                rotation = ExifRotations.get(orientation, 0)
                if rotation:
                    original = original.rotate(rotation)

            latitude = 0
            longitude = 0
            direction = 0

            for k in metadata:
                print "    ", k
                print "      ", metadata[k]
                print "        ", metadata[k].value

            lat = metadata.get('Exif.GPSInfo.GPSLatitude')
            latRef = metadata.get('Exif.GPSInfo.GPSLatitudeRef')
            lon = metadata.get('Exif.GPSInfo.GPSLongitude')
            lonRef = metadata.get('Exif.GPSInfo.GPSLongitudeRef')
            if lat and lon and latRef and lonRef:

                latDegFrac, latMinFrac, latSecFrac = lat.value
                latDeg = float(latDegFrac)
                latMin = float(latMinFrac)
                latSec = float(latSecFrac)
                if latRef.value == 'S':
                    latDeg, latMin, latSec = -latDeg, -latMin, -latSec
                latitude = latDeg + (latMin / 60.0) + (latSec / (60.0 * 60.0))

                lonDegFrac, lonMinFrac, lonSecFrac = lon.value
                lonDeg = float(lonDegFrac)
                lonMin = float(lonMinFrac)
                lonSec = float(lonSecFrac)
                if lonRef.value == 'W':
                    lonDeg, lonMin, lonSec = -lonDeg, -lonMin, -lonSec
                longitude = lonDeg + (lonMin / 60.0) + (lonSec / (60.0 * 60.0))

                print "        lat", lat.value, latRef.value
                print "        lat", "deg", latDegFrac, "min", latMinFrac, "sec", latSecFrac
                print "        lat", "deg", latDeg, "min", latMin, "sec", latSec
                print "        lat", latitude

                print "        lon", lon.value, lonRef.value
                print "        lon", "deg", lonDegFrac, "min", lonMinFrac, "sec", lonSecFrac
                print "        lon", "deg", lonDeg, "min", lonMin, "sec", lonSec
                print "        lon", longitude


            gpsDir = metadata.get('Exif.GPSInfo.GPSImgDirection')

            if gpsDir:
                 direction = float(gpsDir.value)

                 print "        direction", direction

            originalWidth, originalHeight = original.size
            aspect = float(originalHeight) / float(originalWidth)

            if (aspect < 1):
                pictureWidth = PictureSize
                pictureHeight = int(math.floor(PictureSize * aspect))
                thumbnailWidth = ThumbnailSize
                thumbnailHeight = int(math.floor(ThumbnailSize * aspect))
                iconWidth = IconSize
                iconHeight = int(math.floor(IconSize * aspect))
            else:
                pictureHeight = PictureSize
                pictureWidth = int(math.floor(PictureSize / aspect))
                thumbnailHeight = ThumbnailSize
                thumbnailWidth = int(math.floor(ThumbnailSize * aspect))
                iconHeight = IconSize
                iconWidth = int(math.floor(IconSize / aspect))

            print "    original", originalWidth, originalHeight
            print "    picture", pictureWidth, pictureHeight
            print "    thumbnail", thumbnailWidth, thumbnailHeight
            print "    icon", iconWidth, iconHeight

            picture = original.resize((pictureWidth, pictureHeight), Image.ANTIALIAS)
            picture.save(pictureFileName, quality=95)
            
            thumbnail = original.resize((thumbnailWidth, thumbnailHeight), Image.ANTIALIAS)
            thumbnail.save(thumbnailFileName, quality=95)

            icon = original.resize((iconWidth, iconHeight), Image.ANTIALIAS)
            icon.save(iconFileName, quality=95)

            pictureData = {
                'id': originalFileNameBase,
                'latitude': latitude,
                'longitude': longitude,
                'direction': direction,
                'aspect': aspect,
                'original': {
                    'width': originalWidth,
                    'height': originalHeight,
                    'fileName': originalFileName,
                },
                'picture': {
                    'width': pictureWidth,
                    'height': pictureHeight,
                    'fileName': pictureFileName,
                },
                'thumbnail': {
                    'width': thumbnailWidth,
                    'height': thumbnailHeight,
                    'fileName': thumbnailFileName,
                },
                'icon': {
                    'width': iconWidth,
                    'height': iconHeight,
                    'fileName': iconFileName,
                },
            }

            picturesDict[pictureData['id']] = pictureData

        picturesDataJSON = simplejson.dumps(picturesDict)
        picturesDataJS = 'var gPictures = ' + picturesDataJSON + ';\n'
        picturesFileName = os.path.join(
            LociProjectsDir,
            lociProject,
            LociProjectPicturesFile)
        f = open(picturesFileName, 'w')
        f.write(picturesDataJS)
        f.close()


########################################################################


if __name__ == '__main__':

    ProcessLociImages(sys.argv)


########################################################################
