////////////////////////////////////////////////////////////////////////
// pieloci-map.js
//
// Demo Amsterdam map for PieLoci.
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


var gStartLocusID = 'RoofTerrace_South';

var gLociList = [

    {
        id: 'RoofTerrace_South',
        name: 'South Roof Terrace',
        description: 'The south end of the roof terrace has a terrific view of Amsterdam\'s Jordaan neighborhood to the south and east, including the iconic Westerkerk.',
        links: [
            {
                direction: 'North',
                description: 'You can walk to the North end of the roof terrace.',
                destination: 'RoofTerrace_North',
                pictures: [
                    'img_4789'
                ]
            },
            {
                direction: 'NorthEast',
                description: 'Look NorthEast over Amsterdam.',
                pictures: [
                    'img_4790'
                ]
            },
            {
                direction: 'East',
                description: 'Look East over Amsterdam.',
                pictures: [
                    'img_4791'
                ]
            },
            {
                direction: 'SouthEast',
                description: 'Look SouthEast over Amsterdam.',
                pictures: [
                    'img_4792'
                ]
            },
            {
                direction: 'South',
                description: 'Look South over Amsterdam.',
                pictures: [
                    'img_4793'
                ]
            },
            {
                direction: 'SouthWest',
                description: 'Look SouthWest over Amsterdam.',
                pictures: [
                    'img_4794'
                ]
            },
            {
                direction: 'West',
                description: 'Look West over Amsterdam.',
                pictures: [
                    'img_4795'
                ]
            },
            {
                direction: 'NorthWest',
                description: 'Look NorthWest over Amsterdam.',
                pictures: [
                    'img_4796'
                ]
            }
        ]
    },

    {
        id: 'RoofTerrace_North',
        name: 'North Roof Terrace',
        description: 'The North end of the roof terrace has a great view across Brouwersgracht, of Spaarndammerbuurt, Westerpark, Haarlemerburt, and across the river IJ.',
        links: [
            {
                direction: 'North',
                description: 'To the North is the door to the pointy computer room.',
                destination: 'PointyComputerRoom',
                pictures: [
                    'img_4797'
                ]
            },
            {
                direction: 'NorthEast',
                description: 'Look NorthEast over Amsterdam.',
                pictures: [
                    'img_4798'
                ]
            },
            {
                direction: 'East',
                description: 'Look East over Amsterdam.',
                pictures: [
                    'img_4799'
                ]
            },
            {
                direction: 'SouthEast',
                description: 'Look SouthEast over Amsterdam.',
                pictures: [
                    'img_4800'
                ]
            },
            {
                direction: 'South',
                description: 'You can walk to the South end of the roof terrace.',
                destination: 'RoofTerrace_South',
                pictures: [
                    'img_4801'
                ]
            },
            {
                direction: 'SouthWest',
                description: 'Look SouthWest over Amsterdam.',
                pictures: [
                    'img_4802'
                ]
            },
            {
                direction: 'West',
                description: 'Look West over Amsterdam.',
                pictures: [
                    'img_4803'
                ]
            },
            {
                direction: 'NorthWest',
                description: 'Look NorthWest over Amsterdam.',
                pictures: [
                    'img_4804'
                ]
            }
        ]
    },

    {
        id: 'PointyComputerRoom',
        name: 'Pointy Computer Room',
        description: 'The pointy computer room is under the peak of the roof, and it has a door to the roof terrace to the North, and a spiral staircase leading down.',
        links: [
            {
                direction: 'North',
                description: 'Look out the tiny window under the peak of the roof, where the pulley is.',
            },
            {
                direction: 'South',
                description: 'The door leads out South to the roof terrace.',
                destination: 'RoofTerrace_North'
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'You can climb down the spiral staircase to the living room.',
                destination: 'LivingRoom'
            }
        ]
    },

    {
        id: 'LivingRoom',
        name: 'Living Room',
        description: 'The living room has a fireplace on the East side, a couch on the West side, a balcony on the North side, and the dining room is to the South',
        links: [
            {
                direction: 'North',
                description: 'You can look out the French balcony at the North side of the room onto Brouwersgracht.',
                destination: 'Balcony_Front'
            },
            {
                direction: 'South',
                description: 'You can walk South to the dining room.',
                destination: 'DiningRoom'
            },
            {
                direction: 'East',
                description: 'The East side of the room has a TV, a fireplace, and a Jim Woodring painting.',
            },
            {
                direction: 'West',
                description: 'The West side of the room has a couch.',
            },
            {
                direction: 'Up',
                pieDirection: 'North',
                description: 'You can walk up the spiral staircase to the pointy computer room and roof terrace.',
                destination: 'PointyComputerRoom'
            }
        ]
    },

    {
        id: 'Balcony_Front',
        name: 'Front Balcony',
        description: 'The front French balcony overlooks the Herrengracht.',
        links: [
            {
                direction: 'North',
                description: 'Look North out the balcony across the Herrengracht.'
            },
            {
                direction: 'South',
                description: 'You can walk South into the living room.',
                destination: 'LivingRoom'
            },
            {
                direction: 'East',
                description: 'Look East towards the center of Amsterdam.'
            },
            {
                direction: 'West',
                description: 'Look West towards the intersection of Herrengracht and Lijnbaansgracht.',
            },
            {
                direction: 'NorthEast',
                description: 'Look NorthEast towards Haarlemerplein.'
            },
            {
                direction: 'NorthWest',
                description: 'Look NorthWest towards Haarlemerbuurt.',
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'Look Down to the Brouwersgracht street and canal below.'
            }
        ]
    },

    {
        id: 'DiningRoom',
        name: 'Dining Room',
        description: 'You are in the dining room.',
        links: [
            {
                direction: 'North',
                description: 'You can walk North to the living room.',
                destination: 'LivingRoom'
            },
            {
                direction: 'South',
                description: 'The entrance hall is to the South.',
                destination: 'Hall_Entrance'
            },
            {
                direction: 'East',
                description: 'To the East is the kitchen.',
                destination: 'Kitchen'
            },
            {
                direction: 'West',
                description: 'The West side of the room has two big windows that open onto a small rooftop.',
                destination: 'Rooftop_Small'
            }
        ]
    },

    {
        id: 'Kitchen',
        name: 'Kitchen',
        description: 'You are in the kitchen.',
        links: [
            {
                direction: 'South',
                description: 'The refrigerator and the oven are on the South side of the room.',
            },
            {
                direction: 'East',
                description: 'The sink is on the East side of the room.',
            },
            {
                direction: 'West',
                description: 'To the West is the dining room.',
                destination: 'DiningRoom'
            }
        ]
    },

    {
        id: 'Rooftop_Small',
        name: 'Small Rooftop',
        description: 'You are on a small rooftop covered with gravel.',
        links: [
            {
                direction: 'East',
                description: 'You can go through the window to the East into the dining room.',
                destination: 'DiningRoom'
            }
        ]
    },

    {
        id: 'Hall_Entrance',
        name: 'Entrance Hall',
        description: 'You are in the entrance hall.',
        links: [
            {
                direction: 'North',
                description: 'The dining room is to the North.',
                destination: 'DiningRoom'
            },
            {
                direction: 'South',
                description: 'You can walk South to the middle hall.',
                destination: 'Hall_Middle'
            },
            {
                direction: 'East',
                description: 'You can go out the front door to the East, into the stairwell.',
                destination: 'Stairwell_5thFloor'
            },
            {
                direction: 'West',
                description: 'To the West is the toilet.',
                destination: 'Toilet'
            }
        ]
    },

    {
        id: 'Toilet',
        name: 'Toilet',
        description: 'You are in the toilet.',
        links: [
            {
                direction: 'East',
                description: 'You can exit the toilet through the door to the East.',
                destination: 'Hall_Entrance'
            }
        ]
    },

    {
        id: 'Hall_Middle',
        name: 'Middle Hall',
        description: 'You are in the middle hall.',
        links: [
            {
                direction: 'North',
                description: 'The entrance hall is to the North.',
                destination: 'Hall_Entrance'
            },
            {
                direction: 'South',
                description: 'The end of the hall is further South.',
                destination: 'Hall_End'
            },
            {
                direction: 'East',
                description: 'There is some weird but cheap artwork on the East wall.',
            },
            {
                direction: 'West',
                description: 'The bathroom is to the West.',
                destination: 'Bathroom',
            }
        ]
    },

    {
        id: 'Bathroom',
        name: 'Bathroom',
        description: 'You are in the bathroom.',
        links: [
            {
                direction: 'East',
                description: 'You can exit the bathroom through the door to the East.',
                destination: 'Hall_Middle'
            }
        ]
    },

    {
        id: 'Hall_End',
        name: 'End of the Hall',
        description: 'You are at the end of the hall.',
        links: [
            {
                direction: 'North',
                description: 'The hall continues to the North.',
                destination: 'Hall_Middle'
            },
            {
                direction: 'South',
                description: 'The door to the South leads to Juho\'s bedroom.',
                destination: 'Bedroom_Juho'
            },
            {
                direction: 'East',
                description: 'The door to the East leads to Don\'s bedroom.',
                destination: 'Bedroom_Don'
            },
            {
                direction: 'West',
                description: 'The door to the West leads to the cat and laundry room.',
                destination: 'CatAndLaundryRoom'
            },
        ]
    },

    {
        id: 'CatAndLaundryRoom',
        name: 'Cat and Laundry Room',
        description: 'This room is dedicated to cats and laundry,',
        links: [
            {
                direction: 'North',
                description: 'The washing machine and dryer are on the North side of the room.',
            },
            {
                direction: 'South',
                description: 'The cat boxes are on the South side of the room.'
            },
            {
                direction: 'East',
                description: 'The door to the East leads to the hall.',
                destination: 'Hall_End'
            },
            {
                direction: 'West',
                description: 'There is a window on the West side of the room.'
            }
        ]
    },

    {
        id: 'Bedroom_Juho',
        name: 'Juho\'s Bedroom',
        description: 'You are in Juho\'s bedroom.',
        links: [
            {
                direction: 'North',
                description: 'The door to the North opens to the end of the hall.',
                destination: 'Hall_End'
            },
            {
                direction: 'South',
                description: 'There is a window on the South side of the room.'
            },
            {
                direction: 'East',
                description: 'The door to the East opens to a balcony.',
                destination: 'Balcony_Back'
            }
        ]
    },

    {
        id: 'Bedroom_Don',
        name: 'Don\'s Bedroom',
        description: 'You are in Don\'s bedroom,',
        links: [
            {
                direction: 'North',
                description: 'There is a cabinet on the North side of the room.',
            },
            {
                direction: 'South',
                description: 'A door to the South opens to a balcony.',
                destination: 'Balcony_Back'
            },
            {
                direction: 'West',
                description: 'The door to the West leads to the end of the hall.',
                destination: 'Hall_End'
            }
        ]
    },

    {
        id: 'Balcony_Back',
        name: 'Back Balcony',
        description: 'You are on the back balcony, overlooing a courtyard below.',
        links: [
            {
                direction: 'North',
                description: 'A door to the North leads to Don\'s bedroom.',
                destination: 'Bedroom_Don'
            },
            {
                direction: 'South',
                description: 'You can look out South onto the courtyard.'
            },
            {
                direction: 'West',
                description: 'A door to the West leads to Juho\'s bedroom.',
                destination: 'Bedroom_Juho'
            }
        ]
    },

    {
        id: 'Stairwell_5thFloor',
        name: 'Stairwell 5th Floor',
        description: 'This is the 5th floor stairwell.',
        links: [
            {
                direction: 'North',
                description: 'Elevator doors are to the North.',
                destination: 'Elevator'
            },
            {
                direction: 'West',
                description: 'The door to the West leads to the entrance hall.',
                destination: 'Hall_Entrance'
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'The stairs lead down.',
                destination: 'Stairwell_4thFloor'
            }
        ]
    },

    {
        id: 'Stairwell_4thFloor',
        name: 'Stairwell 4th Floor',
        description: 'This is the 4th floor stairwell.',
        links: [
            {
                direction: 'North',
                description: 'Elevator doors are to the North.',
                destination: 'Elevator'
            },
            {
                direction: 'West',
                description: 'The door to the West is locked.',
            },
            {
                direction: 'Up',
                pieDirection: 'North',
                description: 'The stairs lead up to the 5th floor.',
                destination: 'Stairwell_5thFloor'
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'The stairs lead down to the 3rd floor.',
                destination: 'Stairwell_3rdFloor'
            }
        ]
    },

    {
        id: 'Stairwell_3rdFloor',
        name: 'Stairwell 3rd Floor',
        description: 'This is the 3rd floor stairwell.',
        links: [
            {
                direction: 'North',
                description: 'Elevator doors are to the North.',
                destination: 'Elevator'
            },
            {
                direction: 'West',
                description: 'The door to the West is locked.'
            },
            {
                direction: 'Up',
                pieDirection: 'North',
                description: 'The stairs lead up.',
                destination: 'Stairwell_4thFloor'
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'The stairs lead down.',
                destination: 'Stairwell_2ndFloor'
            }
        ]
    },

    {
        id: 'Stairwell_2ndFloor',
        name: 'Stairwell 2nd Floor',
        description: 'This is the 2nd floor stairwell.',
        links: [
            {
                direction: 'North',
                description: 'Elevator doors are to the North.',
                destination: 'Elevator'
            },
            {
                direction: 'West',
                description: 'The door to the West is locked.',
            },
            {
                direction: 'Up',
                pieDirection: 'North',
                description: 'The stairs lead up to the 3rd floor.',
                destination: 'Stairwell_3rdFloor'
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'The stairs lead down to the ground floor.',
                destination: 'Stairwell_1stFloor'
            }
        ]
    },

    {
        id: 'Stairwell_1stFloor',
        name: 'Stairwell 1st Floor',
        description: 'This is the 1st floor stairwell.',
        links: [
            {
                direction: 'North',
                description: 'Elevator doors are to the North.',
                destination: 'Elevator'
            },
            {
                direction: 'West',
                description: 'The door to the West is locked.',
            },
            {
                direction: 'Up',
                pieDirection: 'North',
                description: 'The stairs lead up to the 2nd floor.',
                destination: 'Stairwell_2ndFloor'
            },
            {
                direction: 'Down',
                pieDirection: 'South',
                description: 'The stairs lead down to the ground floor.',
                destination: 'Stairwell_GroundFloor'
            }
        ]
    },

    {
        id: 'Stairwell_GroundFloor',
        name: 'Stairwell Ground Floor',
        description: 'This is the Ground floor stairwell.',
        links: [
            {
                direction: 'North',
                description: 'Elevator doors are to the North.',
                destination: 'Elevator'
            },
            {
                direction: 'West',
                description: 'The door to the West leads to the inside foyer.',
                destination: 'Foyer_Inside'
            },
            {
                direction: 'Up',
                pieDirection: 'North',
                description: 'The stairs lead up to the 1st floor.',
                destination: 'Stairwell_1stFloor'
            }
        ]
    },

    {
        id: 'Elevator',
        name: 'Elevator',
        description: 'You are in the elevator.',
        pieProperties: {
            itemDistanceMin: 80
        },
        links: [
            {
                direction: '5',
                pieDirection: 'South',
                description: 'This button goes to the 5th floor.',
                destination: 'Stairwell_5thFloor'
            },
            {
                direction: '4',
                pieDirection: 'South',
                description: 'This button goes to the 4th floor.',
                destination: 'Stairwell_4thFloor'
            },
            {
                direction: '3',
                pieDirection: 'South',
                description: 'This button goes to the 3rd floor.',
                destination: 'Stairwell_3rdFloor'
            },
            {
                direction: '2',
                pieDirection: 'South',
                description: 'This button goes to the 2nd floor.',
                destination: 'Stairwell_2ndFloor'
            },
            {
                direction: '1',
                pieDirection: 'South',
                description: 'This button goes to the 1st floor.',
                destination: 'Stairwell_1stFloor'
            },
            {
                direction: 'Ground',
                pieDirection: 'South',
                description: 'This button goes to the ground floor.',
                destination: 'Stairwell_GroundFloor'
            }
        ]
    },

    {
        id: 'Foyer_Inside',
        name: 'Inside Foyer',
        description: 'You are in the elevator.',
        links: [
            {
                direction: 'East',
                description: 'The door to the East goes to the elevator and stairwell.',
                destination: 'Stairwell_GroundFloor'
            },
            {
                direction: 'South',
                description: 'The door to the Sout leads to the courtyard.',
                destination: 'Courtyard_NorthEast'
            },
            {
                direction: 'SouthEast',
                description: 'The door to the SouthEast leads to the storage hall.',
                destination: 'StorageHall_North'
            }
        ]
    },

    {
        id: 'StorageHall_North',
        name: 'North end of Storage Hall',
        description: 'This is the North end of the storage hall.',
        links: [
            {
                direction: 'NorthWest',
                description: 'The NorthWest door leads to the inside foyer.',
                destination: 'Foyer_Inside'
            },
            {
                direction: 'South',
                description: 'The storage hall continues to the South.',
                destination: 'StorageHall_Middle'
            },
            {
                direction: 'East',
                description: 'A door to the East leads to a storage room.',
                destination: 'StorageRoom_North'
            },
            {
                direction: 'West',
                description: 'A door to the West leads to the courtyard.',
                destination: 'Courtyard_NorthEast'
            }
        ]
    },

    {
        id: 'StorageRoom_North',
        name: 'North Storage Room',
        description: 'This is the North storage room.',
        links: [
            {
                direction: 'West',
                description: 'A door to the West leads to a storage hall.',
                destination: 'StorageHall_North'
            }
        ]
    },

    {
        id: 'StorageHall_Middle',
        name: 'Middle of Storage Hall',
        description: 'This is the middle of the storage hall.',
        links: [
            {
                direction: 'North',
                description: 'The storage hall continues to the North.',
                destination: 'StorageHall_North'
            },
            {
                direction: 'South',
                description: 'The storage hall continues to the South.',
                destination: 'StorageHall_South'
            },
            {
                direction: 'East',
                description: 'A door to the East leads to the bike storage room.',
                destination: 'StorageRoom_Bike'
            }
        ]
    },

    {
        id: 'StorageRoom_Bike',
        name: 'Bike Storage Room',
        description: 'This is storage room is full of bikes.',
        links: [
            {
                direction: 'West',
                description: 'A door to the West leads to a storage hall.',
                destination: 'StorageHall_Middle'
            }
        ]
    },

    {
        id: 'StorageHall_South',
        name: 'South end of Storage Hall',
        description: 'This is the south end of the storage hall.',
        links: [
            {
                direction: 'North',
                description: 'The storage hall continues to the North.',
                destination: 'StorageHall_Middle'
            },
            {
                direction: 'East',
                description: 'A door to the East leads to a storage room.',
                destination: 'StorageRoom_South'
            }
        ]
    },

    {
        id: 'StorageRoom_South',
        name: 'South Storage Room',
        description: 'This is the South storage room.',
        links: [
            {
                direction: 'West',
                description: 'A door to the West leads to a storage hall.',
                destination: 'StorageHall_South'
            }
        ]
    },

    {
        id: 'Courtyard_NorthEast',
        name: 'NorthEast Courtyard',
        description: 'This is NorthEast corner fo the courtyard.',
        links: [
            {
                direction: 'North',
                description: 'The inside foyer is to the North.',
                destination: 'Foyer_Inside'
            },
            {
                direction: 'South',
                description: 'You can walk through the courtyard to the South.',
                destination: 'Courtyard_SouthEast'
            },
            {
                direction: 'East',
                description: 'The door to the east leads to the storage hall.',
                destination: 'StorageHall_North'
            },
            {
                direction: 'West',
                description: 'You can walk through the courtyard to the West.',
                destination: 'Courtyard_NorthWest'
            },
            {
                direction: 'SouthWest',
                description: 'You can walk through the courtyard to the SouthWest.',
                destination: 'Courtyard_Center'
            }
        ]
    },

    {
        id: 'Courtyard_NorthWest',
        name: 'NorthWest Courtyard',
        description: 'This is NorthWest corner fo the courtyard.',
        links: [
            {
                direction: 'North',
                description: 'The entrance foyer is to the North.',
                destination: 'Foyer_Entrance'
            },
            {
                direction: 'South',
                description: 'You can walk to the South through the courtyard.',
                destination: 'Courtyard_SouthWest'
            },
            {
                direction: 'East',
                description: 'You can walk through the courtyard to the East.',
                destination: 'Courtyard_NorthEast'
            },
            {
                direction: 'SouthEast',
                description: 'You can walk through the courtyard to the SouthEast.',
                destination: 'Courtyard_Center'
            }
        ]
    },

    {
        id: 'Courtyard_SouthEast',
        name: 'SouthEast Courtyard',
        description: 'This is SouthEast corner fo the courtyard.',
        links: [
            {
                direction: 'North',
                description: 'You can walk through the courtyard to the North.',
                destination: 'Courtyard_NorthEast'
            },
            {
                direction: 'West',
                description: 'You can walk through the courtyard to the West.',
                destination: 'Courtyard_SouthWest'
            },
            {
                direction: 'NorthWest',
                description: 'You can walk through the courtyard to the NorthWest.',
                destination: 'Courtyard_Center'
            }
        ]
    },

    {
        id: 'Courtyard_SouthWest',
        name: 'SouthWest Courtyard',
        description: 'This is SouthWest corner fo the courtyard.',
        links: [
            {
                direction: 'North',
                description: 'You can walk to the North through the courtyard.',
                destination: 'Courtyard_NorthWest'
            },
            {
                direction: 'East',
                description: 'You can walk through the courtyard to the East.',
                destination: 'Courtyard_SouthEast'
            },
            {
                direction: 'NorthEast',
                description: 'You can walk through the courtyard to the NorthEast.',
                destination: 'Courtyard_Center'
            }
        ]
    },

    {
        id: 'Courtyard_Center',
        name: 'Center Courtyard',
        description: 'This is SouthEast corner fo the courtyard. There is a fish pond here.',
        links: [
            {
                direction: 'NorthEast',
                description: 'You can walk through the courtyard to the NorthEast.',
                destination: 'Courtyard_NorthEast'
            },
            {
                direction: 'NorthWest',
                description: 'You can walk through the courtyard to the NorthWest.',
                destination: 'Courtyard_NorthWest'
            },
            {
                direction: 'SouthEast',
                description: 'You can walk through the courtyard to the SouthEast.',
                destination: 'Courtyard_SouthEast'
            },
            {
                direction: 'SouthWest',
                description: 'You can walk through the courtyard to the SouthWest.',
                destination: 'Courtyard_SouthWest'
            }
        ]
    },

    {
        id: 'Foyer_Entrance',
        name: 'Entrance Foyer',
        description: 'This is entrance foyer.',
        links: [
            {
                direction: 'North',
                description: 'You can walk out the door to the front entrance.',
                destination: 'Building_Entrance'
            },
            {
                direction: 'South',
                description: 'You can walk into the courtyard to the South.',
                destination: 'Courtyard_NorthWest'
            }
        ]
    },

    {
        id: 'Building_Entrance',
        name: 'Building Entrance',
        description: 'This is building entrance.',
        links: [
            {
                direction: 'South',
                description: 'You can enter the foyer through the door to the South.',
                destination: 'Foyer_Entrance'
            },
            {
                direction: 'North',
                description: 'Brouwersgrach street is to the North.',
                destination: 'Brouwersgracht_Street_1'
            },
            {
                direction: 'East',
                description: 'There are mailboxes and an entrance phone on the wall to the East.'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Street_1',
        name: 'Brouwersgracht Street',
        description: 'You\'re on Brouwersgracht street, going East and West, on the South side of the canal.',
        links: [
            {
                direction: 'North',
                description: 'You can hop into a boat in the Brouwersgrach canal to the North.',
                destination: 'Brouwersgracht_Canal_1'
            },
            {
                direction: 'South',
                description: 'The building entrance is to the South.',
                destination: 'Building_Entrance'
            },
            {
                direction: 'East',
                description: 'You can walk along Brouwersgracht to the East.',
                destination: 'Brouwersgracht_Street_2'
            },
            {
                direction: 'West',
                description: 'You can walk to the corner of Brouwersgracht and Lijnbaansgracht to the West.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Street_Corner'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Street_2',
        name: 'Brouwersgracht Street',
        description: 'You\'re on Brouwersgracht street, going East and West, on the South side of the canal.',
        links: [
            {
                direction: 'North',
                description: 'You can hop into a boat in the Brouwersgrach canal to the North.',
                destination: 'Brouwersgracht_Canal_2'
            },
            {
                direction: 'East',
                description: 'You can walk along Brouwersgracht to the East.',
            },
            {
                direction: 'West',
                description: 'You can walk along Brouwersgracht to the West.',
                destination: 'Brouwersgracht_Street_1'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Lijnbaansgracht_Street_Corner',
        name: 'Corner of Brouwersgracht and Lijnbaansgracht Streets',
        description: 'You\'re at the corner of the streets Brouwersgracht and Lijnbaansgracht, by the intersection of the two canals.',
        links: [
            {
                direction: 'NorthWest',
                description: 'You can hop into a boat in the canal to the NorthWest.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Canal_Intersection'
            },
            {
                direction: 'South',
                description: 'Lijnbaansgracht continues to the South.',
                destination: 'Lijnbaansgracht_Street_1'
            },
            {
                direction: 'East',
                description: 'Brouwersgracht continues to the East.',
                destination: 'Brouwersgracht_Street_1'
            }
        ]
    },

    {
        id: 'Lijnbaansgracht_Street_1',
        name: 'Lijnbaansgracht Street',
        description: 'You\'re on Lijnbaansgracht street, going North and South, on the East side of the canal.',
        links: [
            {
                direction: 'North',
                description: 'You can walk to the corner of Brouwersgracht and Lijnbaansgracht to the North.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Street_Corner'
            },
            {
                direction: 'South',
                description: 'You can walk along Lijnbaansgracht to the South.',
                destination: 'Lijnbaansgracht_Street_2'
            },
            {
                direction: 'West',
                description: 'You can hop into a boat in the Lijnbaansgracht canal to the West.',
                destination: 'Lijnbaansgracht_Canal_1'
            }
        ]
    },

    {
        id: 'Lijnbaansgracht_Street_2',
        name: 'Lijnbaansgracht Street',
        description: 'You\'re on Lijnbaansgracht street, going North and South, on the East side of the canal.',
        links: [
            {
                direction: 'North',
                description: 'You can walk along Lijnbaansgracht to the North.',
                destination: 'Lijnbaansgracht_Street_1'
            },
            {
                direction: 'South',
                description: 'You can walk along Lijnbaansgracht to the South.',
            },
            {
                direction: 'West',
                description: 'You can hop into a boat in the Lijnbaansgracht canal to the West.',
                destination: 'Lijnbaansgracht_Canal_2'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Lijnbaansgracht_Street_Corner',
        name: 'Corner of Brouwersgracht and Lijnbaansgracht Streets',
        description: 'You\'re at the corner of the streets Brouwersgracht and Lijnbaansgracht, by the intersection of the two canals.',
        links: [
            {
                direction: 'North',
                description: 'You can hop into a boat in the canal to the North.',
                destination: 'Brouwersgracht_Canal_0'
            },
            {
                direction: 'West',
                description: 'You can hop into a boat in the canal to the West.',
                destination: 'Lijnbaansgracht_Canal_0'
            },
            {
                direction: 'South',
                description: 'Lijnbaansgracht continues to the South.',
                destination: 'Lijnbaansgracht_Street_1'
            },
            {
                direction: 'East',
                description: 'Brouwersgracht continues to the East.',
                destination: 'Brouwersgracht_Street_1'
            },
            {
                direction: 'NorthWest',
                description: 'You can hop into a boat in the canal to the NorthWest.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Canal_Intersection'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Lijnbaansgracht_Canal_Intersection',
        name: 'Intersection of canals Brouwersgracht and Lijnbaansgracht',
        description: 'You\'re in a boat at the intersection of the canals Brouwersgracht and Lijnbaansgracht.',
        links: [
            {
                direction: 'East',
                description: 'Brouwersgracht canal continues to the East.',
                destination: 'Brouwersgracht_Canal_1'
            },
            {
                direction: 'South',
                description: 'Lijnbaansgracht canal continues to the South.',
                destination: 'Lijnbaansgracht_Canal_1'
            },
            {
                direction: 'West',
                description: 'Brouwersgracht continues to the West.',
            },
            {
                direction: 'SouthEast',
                description: 'You can disembark the boat to the street on the SouthWest side.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Street_Corner'
            }
        ]
    },

    {
        id: 'Lijnbaansgracht_Canal_0',
        name: 'Lijnbaansgracht canal.',
        description: 'You\'re in a boat on the canal Lijnbaansgracht.',
        links: [
            {
                direction: 'North',
                description: 'The canals Brouwersgracht and Lijnbaansgracht intersect to the North.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Canal_Intersection'
            },
            {
                direction: 'South',
                description: 'Lijnbaansgracht canal continues to the South.',
                destination: 'Lijnbaansgracht_Canal_1'
            },
            {
                direction: 'East',
                description: 'You can disembark the boat on the East side to corner of Lijnbaansgracht and Browersgracht streets.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Street_Corner'
            }
        ]
    },

    {
        id: 'Lijnbaansgracht_Canal_1',
        name: 'Lijnbaansgracht canal.',
        description: 'You\'re in a boat on the canal Lijnbaansgracht.',
        links: [
            {
                direction: 'North',
                description: 'Lijnbaansgracht canal continues to the North.',
                destination: 'Lijnbaansgracht_Canal_0'
            },
            {
                direction: 'South',
                description: 'Lijnbaansgracht canal continues to the South.',
                destination: 'Lijnbaansgracht_Canal_2'
            },
            {
                direction: 'East',
                description: 'You can disembark the boat on the East side to Lijnbaansgracht street.',
                destination: 'Lijnbaansgracht_Street_1'
            }
        ]
    },

    {
        id: 'Lijnbaansgracht_Canal_2',
        name: 'Lijnbaansgracht canal.',
        description: 'You\'re in a boat on the canal Lijnbaansgracht.',
        links: [
            {
                direction: 'North',
                description: 'Lijnbaansgracht canal continues to the North.',
                destination: 'Lijnbaansgracht_Canal_1'
            },
            {
                direction: 'South',
                description: 'Lijnbaansgracht canal continues to the South.',
            },
            {
                direction: 'East',
                description: 'You can disembark the boat on the East side to Lijnbaansgracht street.',
                destination: 'Lijnbaansgracht_Street_2'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Canal_0',
        name: 'Brouwersgracht canal.',
        description: 'You\'re in a boat on the canal Brouwersgracht.',
        links: [
            {
                direction: 'South',
                description: 'You can disembark the boat on the South side to corner of Lijnbaansgracht and Browersgracht streets.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Street_Corner'
            },
            {
                direction: 'East',
                description: 'Brouwersgracht continues to the East.',
                destination: 'Brouwersgracht_Canal_1'
            },
            {
                direction: 'West',
                description: 'The canals Brouwersgracht and Lijnbaansgracht intersect to the West.',
                destination: 'Brouwersgracht_Lijnbaansgracht_Canal_Intersection'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Canal_1',
        name: 'Brouwersgracht canal.',
        description: 'You\'re in a boat on the canal Brouwersgracht.',
        links: [
            {
                direction: 'South',
                description: 'You can disembark the boat on the South side to Brouwersgracht street.',
                destination: 'Brouwersgracht_Street_1'
            },
            {
                direction: 'East',
                description: 'Brouwersgracht continues to the East.',
                destination: 'Brouwersgracht_Canal_2'
            },
            {
                direction: 'West',
                description: 'Brouwersgracht continues to the West.',
                destination: 'Brouwersgracht_Canal_0'
            }
        ]
    },

    {
        id: 'Brouwersgracht_Canal_2',
        name: 'Brouwersgracht canal.',
        description: 'You\'re in a boat on the canal Brouwersgracht.',
        links: [
            {
                direction: 'South',
                description: 'You can disembark the boat on the South side to Brouwersgracht street.',
                destination: 'Brouwersgracht_Street_2'
            },
            {
                direction: 'East',
                description: 'Brouwersgracht continues to the East.',
            },
            {
                direction: 'West',
                description: 'Brouwersgracht continues to the West.',
                destination: 'Brouwersgracht_Canal_1'
            }
        ]
    }

];


////////////////////////////////////////////////////////////////////////
