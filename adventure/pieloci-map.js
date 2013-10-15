////////////////////////////////////////////////////////////////////////
// pieloci-map.js
//
// Demo Adventure map for PieLoci.
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


var gStartLocusID = 'FrontPorch';

var gLociList = [

    {
        id: 'FrontPorch',
        name: 'Front Porch',
        description: 'You are on the front porch.',
        links: [
            {
                direction: 'North',
                description: 'The front door to the house is to the North.',
                destination: 'FrontEntranceHall'
            },
            {
                direction: 'South',
                description: 'The sidewalk leads to the road to the south.',
                destination: 'FoobarRoad'
            }
        ]
    },

    {
        id: 'FrontEntranceHall',
        name: 'Front Entrance Hall',
        description: 'You are in the front entrance hall.',
        links: [
            {
                direction: 'North',
                description: 'The hall continues to the North.',
                destination: 'CentralHall'
            },
            {
                direction: 'South',
                description: 'The front door leads out to the south.',
                destination: 'FrontPorch'
            },
            {
                direction: 'East',
                description: 'There is a coat closet to the East.',
                destination: 'CoatCloset'
            },
            {
                direction: 'West',
                description: 'To the West is the living room.',
                destination: 'LivingRoom'
            }
        ]
    },

    {
        id: 'CentralHall',
        name: 'Central Hall',
        description: 'You are in the central hall.',
        links: [
            {
                direction: 'North',
                description: 'The back hall is to the North.',
                destination: 'BackHall'
            },
            {
                direction: 'South',
                description: 'The front entrance hall is to the South.',
                destination: 'FrontEntranceHall'
            },
            {
                direction: 'East',
                description: 'The guest bedroom hall is to the East.',
                destination: 'GuestBedroom'
            },
            {
                direction: 'West',
                description: 'The dining room is to the West.',
                destination: 'DiningRoom'
            }
        ]
    },

    {
        id: 'BackHall',
        name: 'Back Hall',
        description: 'You are in the back hall.',
        links: [
            {
                direction: 'North',
                description: 'The back porch is to the North.',
                destination: 'BackPorch'
            },
            {
                direction: 'South',
                description: 'The central hall is to the South.',
                destination: 'CentralHall'
            },
            {
                direction: 'East',
                description: 'The master bedroom hall is to the East.',
                destination: 'MasterBedroom'
            },
            {
                direction: 'West',
                description: 'The kitchen is to the West.',
                destination: 'Toilet'
            }
        ]
    },

    {
        id: 'BackPorch',
        name: 'Back Porch',
        description: 'You are on the back porch.',
        links: [
            {
                direction: 'North',
                description: 'The back yard is to the North.',
                destination: 'BackYard'
            },
            {
                direction: 'South',
                description: 'The back hall is to the South.',
                destination: 'BackHall'
            }
        ]
    },

    {
        id: 'BackYard',
        name: 'Back Yard',
        description: 'You are in the back yard.',
        links: [
            {
                direction: 'North',
                description: 'The forest is to the North.',
                destination: 'Forest'
            },
            {
                direction: 'South',
                description: 'The back porch is to the South.',
                destination: 'BackPorch'
            },
            {
                direction: 'East',
                description: 'The garden is to the East.',
                destination: 'Garden'
            },
        ]
    },

    {
        id: 'Forest',
        name: 'Forest',
        description: 'You are in the forest.',
        links: [
            {
                direction: 'South',
                description: 'The back yard is to the South.',
                destination: 'BackYard'
            }
        ]
    },

    {
        id: 'Garden',
        name: 'Garden',
        description: 'You are in the garden.',
        links: [
            {
                direction: 'West',
                description: 'The back yard is to the West.',
                destination: 'BackYard'
            }
        ]
    },

    {
        id: 'MasterBedroom',
        name: 'Master Bedroom',
        description: 'You are in the master bedroom.',
        links: [
            {
                direction: 'West',
                description: 'The back hall is to the West.',
                destination: 'BackHall'
            }
        ]
    },

    {
        id: 'GuestBedroom',
        name: 'Guest Bedroom',
        description: 'You are in the guest bedroom.',
        links: [
            {
                direction: 'West',
                description: 'The central hall is to the East.',
                destination: 'CentralHall'
            }
        ]
    },

    {
        id: 'CoatCloset',
        name: 'Coat Closet',
        description: 'You are in the coat closet.',
        links: [
            {
                direction: 'West',
                description: 'The front entrance hall is to the West.',
                destination: 'FrontEntranceHall'
            }
        ]
    },

    {
        id: 'LivingRoom',
        name: 'Living Room',
        description: 'You are in the living room.',
        links: [
            {
                direction: 'East',
                description: 'The front entrance hall is to the East.',
                destination: 'FrontEntranceHall'
            },
            {
                direction: 'North',
                description: 'The dining room is to the North.',
                destination: 'DiningRoom'
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
                description: 'The kitchen is to the North.',
                destination: 'Kitchen'
            },
            {
                direction: 'South',
                description: 'The living room is to the South.',
                destination: 'LivingRoom'
            },
            {
                direction: 'East',
                description: 'The central hall is to the East.',
                destination: 'CentralHall'
            }
        ]
    },

    {
        id: 'Kitchen',
        name: 'Kitchen',
        description: 'You are in the kitchen.',
        links: [
            {
                direction: 'North',
                description: 'The pantry is to the North.',
                destination: 'Pantry'
            },
            {
                direction: 'South',
                description: 'The dining room is to the South.',
                destination: 'DiningRoom'
            },
            {
                direction: 'East',
                description: 'The back hall is to the East.',
                destination: 'BackHall'
            },
            {
                direction: 'West',
                description: 'The toilet is to the West.',
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
                description: 'The kitchen is to the East.',
                destination: 'Kitchen'
            }
        ]
    },

    {
        id: 'Pantry',
        name: 'Pantry',
        description: 'You are in the pantry.',
        links: [
            {
                direction: 'South',
                description: 'The kitchen is to the South.',
                destination: 'Kitchen'
            }
        ]
    },

    {
        id: 'FoobarRoad',
        name: 'Foobar Road',
        description: 'You are on Foobar Road, which leads East to West.',
        links: [
            {
                direction: 'North',
                description: 'The front porch of a house is down the sidewalk the North.',
                destination: 'FrontPorch'
            },
            {
                direction: 'East',
                description: 'Foobar Road continues to the East.',
                destination: 'DeadEndofFoobarRoad'
            },
            {
                direction: 'West',
                description: 'Foobar Road continues to the West towards an intersection.',
                destination: 'IntersectionofFoobarRoadandBazWay'
            }
        ]
    },

    {
        id: 'DeadEndofFoobarRoad',
        name: 'Dead End of Foobar Road',
        description: 'You are on the dead end of Foobar Road, which goes to the West.',
        links: [
            {
                direction: 'West',
                description: 'Foobar Road goes to the West.',
                destination: 'FoobarRoad'
            }
        ]
    },

    {
        id: 'IntersectionofFoobarRoadandBazWay',
        name: 'Intersection of Foobar Road and Baz Way',
        description: 'You are at the intersection of Foobar Road, which goes to the West, and Baz Way, which goes to the North and South.',
        links: [
            {
                direction: 'North',
                description: 'Baz Way goes a short way to the North.',
                destination: 'DeadEndofBazWay'
            },
            {
                direction: 'South',
                description: 'Baz Way goes a long way to the South.',
                destination: 'LongStretchofBazWay'
            },
            {
                direction: 'East',
                description: 'Foobar Road goes to the East towards a commercial area.',
                destination: 'ShoppingCenter'
            },
            {
                direction: 'West',
                description: 'Foobar Road goes to the West towards a residential area.',
                destination: 'FoobarRoad'
            }
        ]
    },

    {
        id: 'DeadEndofBazWay',
        name: 'Dead End of Baz Way',
        description: 'You are at the dead end of Baz Way, which goes to the South.',
        links: [
            {
                direction: 'South',
                description: 'Baz Way goes to the South.',
                destination: 'IntersectionofFoobarRoadandBazWay'
            }
        ]
    },

    {
        id: 'LongStretchofBazWay',
        name: 'Long Stretch of Baz Way',
        description: 'You are on a long stretch of Baz Way, which goes from North to South.',
        links: [
            {
                direction: 'North',
                description: 'Baz Way goes far to the North.',
                destination: 'IntersectionofFoobarRoadandBazWay'
            },
            {
                direction: 'South',
                description: 'Baz Way goes far to the South.',
                destination: 'Beach'
            }
        ]
    },

    {
        id: 'Beach',
        name: 'Beach',
        description: 'You are on the beach.',
        links: [
            {
                direction: 'North',
                description: 'Baz Way goes far to the North.',
                destination: 'LongStretchofBazWay'
            }
        ]
    },

    {
        id: 'ShoppingCenter',
        name: 'Shopping Center',
        description: 'You are at the shopping center.',
        links: [
            {
                direction: 'East',
                description: 'Foobar Road goes to the East towards an intersection.',
                destination: 'IntersectionofFoobarRoadandBazWay'
            }
        ]
    }

];


////////////////////////////////////////////////////////////////////////
