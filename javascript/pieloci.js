////////////////////////////////////////////////////////////////////////
// pieloci.js
//
// Loci with jQuery Pies.
//
// Copyright (C) 2013 By Don Hopkins.
// All rights reserved.
//
////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////


var gTarget = null;
var gLocusPie = null;
var gPies = {};
var gLoci = {};
var gLociList = [];
var gStartLocusID = null;
var gTargetOptions;


////////////////////////////////////////////////////////////////////////


$(function() {

    function centerElement($el, maxWidth) {
        $el.css('width', maxWidth);
        $el.css('height', 'auto');
        var width = $el.outerWidth();
        var height = $el.outerHeight();
        $el.css('margin-left', width / -2);
        $el.css('margin-top', height / -2);
    }

    function escapeHTML(text) {
        return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;'));
    }

    function escapeAttribute(text) {
        return (escapeHTML(text)
            .replace('"', '&quot;'));
    }

    // Define the pie for navigating loci.
    gLocusPie = gPies['locusPie'] = {

        loci: gLoci,
        currentLocusID: gStartLocusID,

        // Any properties that loci override in locus.pieProperties
        // must be initialized to their default value here, so we can
        // reset the pie.
        defaultPieProperties: {
            itemDistanceMin: 180,
            itemDistanceSpacing: 45,
            feedbackWidth: 180,
            feedbackFontSize: '10pt',
        },

        // Prepare the locus pie to reflect the current locus before it is shown.
        onpieshow: function(event, pie) {

            this._removePieSlices(pie);

            var options = this.options;
            var locusID = pie.currentLocusID;
            var locus = locusID && pie.loci[locusID];

            if (!locus) {
                console.log('ERROR: locusPie onpieshow could not find locusID', locusID);
                return;
            }

            // Reset the pie properties.
            $.extend(pie, pie.defaultPieProperties);

            // Customize the pie properties for the locus.
            if (locus.pieProperties) {
                $.extend(pie, locus.pieProperties);
            }

            // Calculate the derived pie properties.
            pie.pieBackgroundCSS = {
                'font-size': pie.feedbackFontSize,
                'text-align': 'center'
            };

            var links = locus.links;
            var directionToSlice = {};

            for (var linkIndex = 0, linkCount = links.length;
                linkIndex < linkCount;
                linkIndex++) {

                (function(linkIndex) {
                    // Find a slice to put the link into.
                    var slice;
                    var link = links[linkIndex];
                    var direction = link.pieDirection || link.direction;

                    if (direction) {

                        // If the link has a direction,
                        // then re-use the slice in that direction.
                        slice = directionToSlice[direction];
                        if (!slice) {

                            // If we don't already have a slice in that direction,
                            // then make one.
                            slice = {
                                itemShear: 0,
                                sliceItemLayout: 'nonOverlapping',
                                sliceDirection: direction,
                                items: []
                            };
                            pie.slices.push(slice);
                            directionToSlice[direction] = slice;

                        }

                    } else {

                        // If the link doesn't have a direction,
                        // then make a new slice for it without any
                        // particular sliceDirection, so it's assigned 
                        // to a free direction.
                        slice = {
                            items: []
                        };
                        pie.slices.push(slice);

                    }

                    // Make an item for the link, and add it to the slice.
                    item = {
                        link: link,
                        label: link.direction || link.label
                    };
                    if (link.destination) {
                        item.nextPie = 'locusPie';
                        item.onpieitemselect = function(event, pie, slice, item) {
                            pie.currentLocusID = link.destination;
                        };
                    }
                    slice.items.push(item);

                    // Make items for each of the link pictures.
                    var pictures = link.pictures;
                    if (pictures) {
                        for (var pictureIndex = 0, pictureCount = pictures.length;
                             pictureIndex < pictureCount;
                             pictureIndex++) {
                            var pictureID = pictures[pictureIndex];
                            var data = gPictures[pictureID];
                            var iconData = data['icon'];
                            var thumbnailData = data['thumbnail'];
                            var pictureData = data['picture'];
                            var picture =
                                '<img src="images/pictures/' +
                                pictureID +
                                '.jpg" width="' +
                                pictureData['width'] +
                                '" height="' +
                                pictureData['height'] +
                                '"/>';
                            var thumbnail =
                                '<img src="images/thumbnails/' +
                                pictureID +
                                '.jpg" width="' +
                                thumbnailData['width'] +
                                '" height="' +
                                thumbnailData['height'] +
                                '"/>';
                            var icon =
                                '<img src="images/icons/' +
                                pictureID +
                                '.jpg" width="' +
                                iconData['width'] +
                                '" height="' +
                                iconData['height'] +
                                '"/>';
                            console.log("picture", picture, pictureData);
                            console.log("thumbnail", thumbnail, thumbnailData);
                            console.log("icon", icon, iconData);
                            item = {
                                label: icon,
                                icon: icon,
                                thumbnail: thumbnail,
                                picture: picture,
                                maxFeedbackWidth: 1024
                            }
                            slice.items.push(item);
                        }
                    }

                    // Customize the slice properties for the link.
                    if (link.sliceProperties) {
                        $.extend(slice, link.slicePropertie);
                    }

                    // Customize the item properties for the link.
                    if (link.itemProperties) {
                        $.extend(item, link.pieProperties);
                    }

                })(linkIndex);
            }

        },

        // Show some feedback about the current selection in the
        // center background of the pie.
        onpieitemstart: function(event, pie, slice, item) {

            var options = this.options;
            var locusID = pie.currentLocusID;
            var locus = locusID && pie.loci[locusID];

            // Calculate the feedback to show in the center of the pie.
            var feedback;

            if (!item) {

                // No item is selected. Describe the current locus.
                feedback =
                    'You are at:<br/><b style="font-size: 120%;">' +
                    escapeHTML(locus.name) +
                    '</b><br/><hr/>' +
                    locus.description; // locus.description is html.

            } else {

                // An item is selected.

                var link = item.link;
                var linkedLocus =
                    (link && link.destination)
                        ? pie.loci[link.destination]
                        : null;

                if (!linkedLocus) {

                    if (item.thumbnail) {
                        // The selected item has a thumbnail.
                        // Show the thumbnail.
                        feedback = item.thumbnail;
                    } else {
                        // The selected item is not linked to a locus.
                        // Describe the link.
                        feedback =
                            'Look <b>' +
                            escapeHTML(link.direction) +
                            '</b>:<br/><hr/>' +
                            link.description; // link.description is html.
                    }

                } else {

                    // The selected item is linked to a locus.
                    // Describe the link and the linked locus.
                    feedback =
                        'Go <b><u>' +
                        escapeHTML(link.direction) +
                        '</u></b> to<br/>' +
                        '<b style="font-size: 120%;">' +
                        escapeHTML(linkedLocus.name) +
                        '</b><br/><hr/>' +
                        link.description; // link.description is html.

                }

            }

            // Show the feedback in the middle background of the pie.
            pie.$pieBackground
                .html(feedback);
            centerElement(
                pie.$pieBackground,
                (item && item.maxFeedbackWidth)
                    ? item.maxFeedbackWidth
                    : 200);

        }

    };

    gPies['picturePie'] = {
        
    };

    // Make the dictionary of loci from lociList,
    // and initialize the currentLocusID with the
    // id of the first locus, if it wasn't already
    // defined in gStartLocusID.
    for (var locusIndex = 0, locusCount = gLociList.length;
         locusIndex < locusCount;
         locusIndex++) {

        var locus = gLociList[locusIndex];
        var locusID = locus.id;

        gLoci[locusID] = locus;

        if (!gLocusPie.currentLocusID) {
            gLocusPie.currentLocusID = locusID;
        }

    }

    // Configure the target.
    gTargetOptions = {
        pies: gPies,
        defaultPie: 'locusPie'
    };

    gTarget =
        $('#target')
            .pie(gTargetOptions);

    console.log("pieloci.js initialized:", "gPies", gPies, "gLocusPie", gLocusPie, "gLoci", gLoci, "gLociList", gLociList, "gTargetOptions", gTargetOptions, "gTarget", gTarget);

    $('#message').html("Loaded.");

});


////////////////////////////////////////////////////////////////////////
