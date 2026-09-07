const fireDangerDefinitions = [
    {
        name: "Burning Index",
        abbreviation: "BI",
        definition: ""
    }, 
    {
        name: "Energy Release Component",
        abbreviation: "ERC",
        definition: ""
    }, 
    {
        name: "10-hour Fuel Moisture",
        abbreviation: "10hr FM",
        definition: ""
    }, 
    {
        name: "100-hour Fuel Moisture",
        abbreviation: "100hr FM",
        definition: ""
    }, 
    {
        name: "1000-hour Fuel Moisture",
        abbreviation: "1000hr FM",
        definition: ""
    }
];


const texasCounties = [
    "Anderson", 
    "Andrews", 
    "Angelina", 
    "Aransas", 
    "Archer", 
    "Armstrong", 
    "Atascosa", 
    "Austin", 
    "Bailey", 
    "Bandera", 
    "Bastrop", 
    "Baylor", 
    "Bee", 
    "Bell", 
    "Bexar", 
    "Blanco", 
    "Borden", 
    "Bosque", 
    "Bowie", 
    "Brazoria", 
    "Brazos", 
    "Brewster", 
    "Briscoe", 
    "Brooks", 
    "Brown", 
    "Burleson", 
    "Burnet", 
    "Caldwell", 
    "Calhoun", 
    "Callahan", 
    "Cameron", 
    "Camp", 
    "Carson", 
    "Cass", 
    "Castro", 
    "Chambers", 
    "Cherokee", 
    "Childress", 
    "Clay", 
    "Cochran", 
    "Coke", 
    "Coleman", 
    "Collin", 
    "Collingsworth", 
    "Colorado", 
    "Comal", 
    "Comanche", 
    "Concho", 
    "Cooke", 
    "Coryell", 
    "Cottle", 
    "Crane", 
    "Crockett", 
    "Crosby", 
    "Culberson", 
    "Dallam", 
    "Dallas", 
    "Dawson", 
    "Deaf Smith", 
    "Delta", 
    "Denton", 
    "DeWitt", 
    "Dickens", 
    "Dimmit", 
    "Donley", 
    "Duval", 
    "Eastland", 
    "Ector", 
    "Edwards", 
    "Ellis", 
    "El Paso", 
    "Erath", 
    "Falls", 
    "Fannin", 
    "Fayette", 
    "Fisher", 
    "Floyd", 
    "Foard", 
    "Fort Bend", 
    "Franklin", 
    "Freestone", 
    "Frio", 
    "Gaines", 
    "Galveston", 
    "Garza", 
    "Gillespie", 
    "Glasscock", 
    "Goliad", 
    "Gonzales", 
    "Gray", 
    "Grayson", 
    "Gregg", 
    "Grimes", 
    "Guadalupe", 
    "Hale", 
    "Hall", 
    "Hamilton", 
    "Hansford", 
    "Hardeman", 
    "Hardin", 
    "Harris", 
    "Harrison", 
    "Hartley", 
    "Haskell", 
    "Hays", 
    "Hemphill", 
    "Henderson", 
    "Hidalgo", 
    "Hill", 
    "Hockley", 
    "Hood", 
    "Hopkins", 
    "Houston", 
    "Howard", 
    "Hudspeth", 
    "Hunt", 
    "Hutchinson", 
    "Irion", 
    "Jack", 
    "Jackson", 
    "Jasper", 
    "Jeff Davis", 
    "Jefferson", 
    "Jim Hogg", 
    "Jim Wells", 
    "Johnson", 
    "Jones", 
    "Karnes", 
    "Kaufman", 
    "Kendall", 
    "Kenedy", 
    "Kent",
    "Kerr", 
    "Kimble", 
    "King", 
    "Kinney", 
    "Kleberg", 
    "Knox", 
    "Lamar", 
    "Lamb", 
    "Lampasas", 
    "La Salle", 
    "Lavaca", 
    "Lee", 
    "Leon", 
    "Liberty", 
    "Limestone",
    "Lipscomb", 
    "Live Oak", 
    "Llano", 
    "Loving", 
    "Lubbock", 
    "Lynn", 
    "McCulloch", 
    "McLennan", 
    "McMullen", 
    "Madison", 
    "Marion", 
    "Martin", 
    "Mason", 
    "Matagorda", 
    "Maverick", 
    "Medina", 
    "Menard", 
    "Midland", 
    "Milam", 
    "Mills", 
    "Mitchell", 
    "Montague", 
    "Montgomery", 
    "Moore", 
    "Morris", 
    "Motley", 
    "Nacogdoches", 
    "Navarro", 
    "Newton", 
    "Nolan", 
    "Nueces", 
    "Ochiltree",
    "Oldham",
    "Orange",
    "Palo Pinto", 
    "Panola", 
    "Parker", 
    "Parmer", 
    "Pecos", 
    "Polk", 
    "Potter", 
    "Presidio", 
    "Rains", 
    "Randall", 
    "Reagan", 
    "Real", 
    "Red River", 
    "Reeves", 
    "Refugio", 
    "Roberts", 
    "Robertson", 
    "Rockwall", 
    "Runnels", 
    "Rusk", 
    "Sabine", 
    "San Augustine", 
    "San Jacinto", 
    "San Patricio", 
    "San Saba", 
    "Schleicher", 
    "Scurry", 
    "Shackelford", 
    "Shelby", 
    "Sherman", 
    "Smith", 
    "Somervell", 
    "Starr", 
    "Stephens", 
    "Sterling", 
    "Stonewall", 
    "Sutton", 
    "Swisher", 
    "Tarrant", 
    "Taylor", 
    "Terrell", 
    "Terry", 
    "Throckmorton", 
    "Titus", 
    "Tom Green", 
    "Travis", 
    "Trinity", 
    "Tyler", 
    "Upshur", 
    "Upton", 
    "Uvalde", 
    "Val Verde", 
    "Van Zandt", 
    "Victoria", 
    "Walker", 
    "Waller", 
    "Ward", 
    "Washington", 
    "Webb", 
    "Wharton", 
    "Wheeler", 
    "Wichita", 
    "Wilbarger", 
    "Willacy", 
    "Williamson", 
    "Wilson", 
    "Winkler", 
    "Wise", 
    "Wood", 
    "Yoakum", 
    "Young", 
    "Zapata", 
    "Zavala"
]; 


const predictiveServiceAreas = [
    {
        PSAname: "Caprock", 
        PSAcounties: ["Bailey", "Castro", "Cochran", "Crosby", "Floyd", "Garza", "Hale", "Hockley", "Lamb", "Lubbock", "Lynn", "Parmer", "Swisher", "Terry", "Yoakum"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/CAPROCK_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/CAPROCK_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.52, 
                twentyFifthPercentile: 7.86, 
                tenthPercentile: 6.53, 
                thirdPercentile: 5.43
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.57, 
                twentyFifthPercentile: 11.62, 
                tenthPercentile: 10.12, 
                thirdPercentile: 8.80
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.86, 
                twentyFifthPercentile: 13.13, 
                tenthPercentile: 11.65, 
                thirdPercentile: 10.22
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 55, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 78, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        PSAname: "Central Texas", 
        PSAcounties: ["Austin", "Bastrop", "Brazos", "Burleson", "Caldwell", "Colorado", "DeWitt", "Falls", "Fayette", "Fort Bend", "Gonzales", "Guadalupe", "Jackson", "Lavaca", "Lee", "Milam", "Robertson", "Victoria", "Washington", "Wharton"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/CENTRAL_TEXAS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/CENTRAL_TEXAS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.00, 
                twentyFifthPercentile: 10.55, 
                tenthPercentile: 9.54, 
                thirdPercentile: 8.60
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.49, 
                twentyFifthPercentile: 15.81, 
                tenthPercentile: 14.75, 
                thirdPercentile: 13.79
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.30, 
                twentyFifthPercentile: 17.53, 
                tenthPercentile: 16.31, 
                thirdPercentile: 15.28
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 74, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        PSAname: "Cross Timbers", 
        PSAcounties: ["Clay", "Comanche", "Cooke", "Denton", "Erath", "Hamilton", "Hill", "Hood", "Jackson", "Johnson", "McLennan", "Montague", "Palo Pinto", "Parker", "Somervell", "Tarrant", "Wise"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/CROSS_TIMBERS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/CROSS_TIMBERS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.97, 
                twentyFifthPercentile: 9.36, 
                tenthPercentile: 8.00, 
                thirdPercentile: 6.64
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.22, 
                twentyFifthPercentile: 14.44, 
                tenthPercentile: 12.71, 
                thirdPercentile: 10.79
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.74, 
                twentyFifthPercentile: 16.09, 
                tenthPercentile: 14.39, 
                thirdPercentile: 12.12
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        PSAname: "Eastern Hill Country", 
        PSAcounties: ["Bandera", "Bell", "Blanco", "Burnet", "Comal", "Coryell", "Gillespie", "Hays", "Kendall", "Kerr", "Lampasas", "Llano", "Mason", "McCulloch", "Mills", "Real", "San Saba", "Travis", "Williamson"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/EASTERN_HILL_COUNTRY_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/EASTERN_HILL_COUNTRY_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.8, 
                twentyFifthPercentile: 9.59, 
                tenthPercentile: 8.42, 
                thirdPercentile: 7.29
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.68, 
                twentyFifthPercentile: 14.93, 
                tenthPercentile: 13.55, 
                thirdPercentile: 12.08
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.37, 
                twentyFifthPercentile: 16.67, 
                tenthPercentile: 15.22, 
                thirdPercentile: 13.69
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        PSAname: "High Plains", 
        PSAcounties: ["Armstrong", "Briscoe", "Carson", "Dallam", "Deaf Smith", "Donley", "Gray", "Hansford", "Hartley", "Hemphill", "Hutchinson", "Lipscomb", "Moore", "Ochiltree", "Oldham", "Potter", "Randall", "Roberts", "Sherman", "Wheeler"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/HIGH_PLAINS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/HIGH_PLAINS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.61, 
                twentyFifthPercentile: 7.99, 
                tenthPercentile: 6.66, 
                thirdPercentile: 5.62
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.45, 
                twentyFifthPercentile: 11.66, 
                tenthPercentile: 10.27, 
                thirdPercentile: 8.98
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.71, 
                twentyFifthPercentile: 13.13, 
                tenthPercentile: 11.69, 
                thirdPercentile: 10.38
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 79, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        PSAname: "Lower Gulf Coast", 
        PSAcounties: ["Brooks", "Calhoun", "Cameron", "Hildalgo", "Jim Wells", "Kenedy", "Kleberg", "Nueces", "Refugio", "San Patricio", "Willacy"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/LOWER_GULF_COAST_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/LOWER_GULF_COAST_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.24, 
                twentyFifthPercentile: 11.04, 
                tenthPercentile: 10.14, 
                thirdPercentile: 9.19
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.63, 
                twentyFifthPercentile: 15.98, 
                tenthPercentile: 14.97, 
                thirdPercentile: 14.24
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.49, 
                twentyFifthPercentile: 17.66, 
                tenthPercentile: 16.63, 
                thirdPercentile: 15.98
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 85
            } 
        ]
    }, 
    {
        PSAname: "North Texas", 
        PSAcounties: ["Collin", "Dallas", "Delta", "Ellis", "Fannin", "Grayson", "Henderson", "Hopkins", "Hunt", "Kaufman", "Lamar", "Limestone", "Navarro", "Rains", "Rockwall", "Van Zandt"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/NORTH_TEXAS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/NORTH_TEXAS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.64, 
                twentyFifthPercentile: 10.16, 
                tenthPercentile: 8.93, 
                thirdPercentile: 7.60
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.10, 
                twentyFifthPercentile: 15.52, 
                tenthPercentile: 14.14, 
                thirdPercentile: 12.39
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.78, 
                twentyFifthPercentile: 17.30, 
                tenthPercentile: 15.82, 
                thirdPercentile: 13.81
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 73, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        PSAname: "Northeast Texas", 
        PSAcounties: ["Bowie", "Camp", "Cass", "Franklin", "Gregg", "Harrison", "Marion", "Morris", "Panola", "Red River", "Rusk", "Smith", "Titus", "Upshur", "Wood"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/NORTHEAST_TEXAS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/NORTHEAST_TEXAS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.12, 
                twentyFifthPercentile: 10.59, 
                tenthPercentile: 9.51, 
                thirdPercentile: 8.48
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.56, 
                twentyFifthPercentile: 15.82, 
                tenthPercentile: 14.59, 
                thirdPercentile: 13.48
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.50, 
                twentyFifthPercentile: 17.67, 
                tenthPercentile: 16.38, 
                thirdPercentile: 15.15
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        PSAname: "Rolling Plains", 
        PSAcounties: ["Archer", "Baylor", "Brown", "Callahan", "Childress", "Coke", "Coleman", "Collingsworth", "Cottle", "Dickens", "Eastland", "Fisher", "Foard", "Hall", "Hardeman", "Haskell", "Jones", "Kent", "Knox", "Mithcell", "Motley", "Nolan", "Runnels", "Scurry", "Shackelford", "Stephens", "Sterling", "Stonewall", "Taylor", "Throckmorton", "Wichita", "Wilbarger", "Young"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/ROLLING_PLAINS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/ROLLING_PLAINS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.82, 
                twentyFifthPercentile: 8.12, 
                tenthPercentile: 6.69, 
                thirdPercentile: 5.47
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.51, 
                twentyFifthPercentile: 12.46, 
                tenthPercentile: 10.71, 
                thirdPercentile: 8.93
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.86, 
                twentyFifthPercentile: 14.01, 
                tenthPercentile: 12.33, 
                thirdPercentile: 10.19
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        PSAname: "South Texas", 
        PSAcounties: ["Atascosa", "Bee", "Bexar", "Dimmit", "Duval", "Frio", "Goliad", "Jim Hogg", "Karnes", "Kinney", "La Salle", "Live Oak", "Maverick", "McMullen", "Medina", "Starr", "Uvalde", "Webb", "Wilson", "Zapata", "Zavala"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/SOUTH_TEXAS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/SOUTH_TEXAS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.05, 
                twentyFifthPercentile: 9.58, 
                tenthPercentile: 8.57, 
                thirdPercentile: 7.44
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.49, 
                twentyFifthPercentile: 14.90, 
                tenthPercentile: 13.81, 
                thirdPercentile: 12.68
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.77, 
                twentyFifthPercentile: 16.51, 
                tenthPercentile: 15.44, 
                thirdPercentile: 14.49
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 76, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 79, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        PSAname: "Southeast Texas", 
        PSAcounties: ["Angelina", "Hardin", "Jasper", "Liberty", "Nacogdoches", "Newton", "Polk", "Sabine", "San Augustine", "Shelby", "Tyler"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/SOUTHEAST_TEXAS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/SOUTHEAST_TEXAS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.74, 
                twentyFifthPercentile: 11.04, 
                tenthPercentile: 10.02, 
                thirdPercentile: 9.16
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.13, 
                twentyFifthPercentile: 16.42, 
                tenthPercentile: 15.07, 
                thirdPercentile: 14.26
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.05, 
                twentyFifthPercentile: 18.02, 
                tenthPercentile: 16.78, 
                thirdPercentile: 15.87
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        PSAname: "Southern Plains", 
        PSAcounties: ["Andrews", "Borden", "Crane", "Dawson", "Ector", "Gaines", "Glasscock", "Howard", "Loving", "Martin", "Midland", "Reagan", "Upton", "Ward", "Winkler"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/SOUTHERN_PLAINS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/SOUTHERN_PLAINS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.26, 
                twentyFifthPercentile: 7.51, 
                tenthPercentile: 6.25, 
                thirdPercentile: 5.24
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.67, 
                twentyFifthPercentile: 11.55, 
                tenthPercentile: 9.99, 
                thirdPercentile: 8.57
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.05, 
                twentyFifthPercentile: 13.13, 
                tenthPercentile: 11.55, 
                thirdPercentile: 9.79
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        PSAname: "Trans Pecos", 
        PSAcounties: ["Brewster", "Culberson", "El Paso", "Hudspeth", "Jeff Davis", "Pecos", "Presidio", "Reeves", "Terrell"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/TRANS_PECOS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/TRANS_PECOS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.00, 
                twentyFifthPercentile: 6.51, 
                tenthPercentile: 5.37, 
                thirdPercentile: 4.40
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.31, 
                twentyFifthPercentile: 9.57, 
                tenthPercentile: 8.27, 
                thirdPercentile: 7.20
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.59, 
                twentyFifthPercentile: 10.89, 
                tenthPercentile: 9.67, 
                thirdPercentile: 8.57
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 58, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        PSAname: "Upper Gulf Coast", 
        PSAcounties: ["Brazoria", "Chambers", "Galveston", "Jefferson", "Matagorda", "Orange"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/UPPER_GULF_COAST_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/UPPER_GULF_COAST_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.46, 
                twentyFifthPercentile: 11.80, 
                tenthPercentile: 10.80, 
                thirdPercentile: 9.97
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.33, 
                twentyFifthPercentile: 16.47, 
                tenthPercentile: 15.32, 
                thirdPercentile: 14.61
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.25, 
                twentyFifthPercentile: 18.37, 
                tenthPercentile: 17.16, 
                thirdPercentile: 16.43
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 68, 
                thirdPercentile: 80
            } 
        ]
    }, 
    {
        PSAname: "Western Hill Country", 
        PSAcounties: ["Concho", "Crockett", "Edwards", "Irion", "Kimble", "Menard", "Schleicher", "Sutton", "Tom Green", "Val Verde"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/WESTERN_HILL_COUNTRY_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/WESTERN_HILL_COUNTRY_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.22, 
                twentyFifthPercentile: 8.53, 
                tenthPercentile: 7.24, 
                thirdPercentile: 6.17
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.28, 
                twentyFifthPercentile: 13.29, 
                tenthPercentile: 11.63, 
                thirdPercentile: 10.14
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.42, 
                twentyFifthPercentile: 14.88, 
                tenthPercentile: 13.30, 
                thirdPercentile: 11.60
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 76, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        PSAname: "Western Pineywoods", 
        PSAcounties: ["Anderson", "Cherokee", "Freestone", "Grimes", "Harris", "Houston", "Leon", "Madison", "Montgomery", "San Jacinto", "Trinity", "Walker", "Waller"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/WESTERN_PINEYWOODS_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/WESTERN_PINEYWOODS_fm100.pdf", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.74, 
                twentyFifthPercentile: 11.14, 
                tenthPercentile: 9.98, 
                thirdPercentile: 8.99
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.51, 
                twentyFifthPercentile: 16.50, 
                tenthPercentile: 15.32, 
                thirdPercentile: 14.33
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.33, 
                twentyFifthPercentile: 18.35, 
                tenthPercentile: 16.99, 
                thirdPercentile: 15.81
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 39, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            } 
        ]
    }, 
];


const weatherStations = [
    {
        stationName: "Muleshoe", 
        stationId: "418904", 
        stationLatitude: 34.207, 
        stationLongitute: -102.743, 
        predicitveServiceArea: "Caprock", 
        stationCounty: "Bailey", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.67, 
                twentyFifthPercentile: 8.11, 
                tenthPercentile: 6.73, 
                thirdPercentile: 5.54
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.56, 
                twentyFifthPercentile: 11.72, 
                tenthPercentile: 10.34, 
                thirdPercentile: 8.98
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.88, 
                twentyFifthPercentile: 13.17, 
                tenthPercentile: 11.95, 
                thirdPercentile: 10.57
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 70, 
                tenthPercentile: 80, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Tulia", 
        stationId: "418905", 
        stationLatitude: 34.543, 
        stationLongitute: -101.741, 
        predicitveServiceArea: "Caprock", 
        stationCounty: "Swisher", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.06, 
                twentyFifthPercentile: 8.40, 
                tenthPercentile: 7.01, 
                thirdPercentile: 5.79
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.18, 
                twentyFifthPercentile: 12.25, 
                tenthPercentile: 10.61, 
                thirdPercentile: 9.43
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.40, 
                twentyFifthPercentile: 13.69, 
                tenthPercentile: 12.15, 
                thirdPercentile: 10.86
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 54, 
                twentyFifthPercentile: 67, 
                tenthPercentile: 78, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Lubbock Int. Apt.", 
        stationId: "419002", 
        stationLatitude: 33.6675, 
        stationLongitute: -101.82139, 
        predicitveServiceArea: "Caprock", 
        stationCounty: "Lubbock", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KLBB&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.64, 
                twentyFifthPercentile: 7.89, 
                tenthPercentile: 6.59, 
                thirdPercentile: 5.46
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.44, 
                twentyFifthPercentile: 11.50, 
                tenthPercentile: 10.11, 
                thirdPercentile: 8.75
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.66, 
                twentyFifthPercentile: 13.01, 
                tenthPercentile: 11.53, 
                thirdPercentile: 10.08
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 55, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 78, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Levelland", 
        stationId: "419004", 
        stationLatitude: 33.527, 
        stationLongitute: -102.36, 
        predicitveServiceArea: "Caprock", 
        stationCounty: "Hockley", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.47, 
                twentyFifthPercentile: 7.81, 
                tenthPercentile: 6.50, 
                thirdPercentile: 5.50
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.54, 
                twentyFifthPercentile: 11.53, 
                tenthPercentile: 10.09, 
                thirdPercentile: 8.89
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.80, 
                twentyFifthPercentile: 13.03, 
                tenthPercentile: 11.63, 
                thirdPercentile: 10.31
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "White River Lake", 
        stationId: "419005", 
        stationLatitude: 33.525, 
        stationLongitute: -101.165, 
        predicitveServiceArea: "Caprock",
        stationCounty: "Crosby",  
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.28, 
                twentyFifthPercentile: 7.61, 
                tenthPercentile: 6.34, 
                thirdPercentile: 5.25
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.48, 
                twentyFifthPercentile: 11.49, 
                tenthPercentile: 9.98, 
                thirdPercentile: 8.54
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.85, 
                twentyFifthPercentile: 13.10, 
                tenthPercentile: 11.43, 
                thirdPercentile: 10.00
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Post", 
        stationId: "419007", 
        stationLatitude: 33.200, 
        stationLongitute: -101.368, 
        predicitveServiceArea: "Caprock", 
        stationCounty: "Garza", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.02, 
                twentyFifthPercentile: 7.35, 
                tenthPercentile: 5.99, 
                thirdPercentile: 5.01
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.21, 
                twentyFifthPercentile: 11.22, 
                tenthPercentile: 9.61, 
                thirdPercentile: 8.18
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.55, 
                twentyFifthPercentile: 12.77, 
                tenthPercentile: 11.22, 
                thirdPercentile: 9.49
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Round Prairie", 
        stationId: "413101", 
        stationLatitude: 31.29556, 
        stationLongitute: -96.36556, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Roberston", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=RPRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.65, 
                twentyFifthPercentile: 10.12, 
                tenthPercentile: 9.01, 
                thirdPercentile: 7.96
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.12, 
                twentyFifthPercentile: 15.42, 
                tenthPercentile: 14.29, 
                thirdPercentile: 13.01
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.06, 
                twentyFifthPercentile: 17.23, 
                tenthPercentile: 15.88, 
                thirdPercentile: 14.28
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 72, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Easterwood Field", 
        stationId: "413901", 
        stationLatitude: 30.58222, 
        stationLongitute: -96.36167, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Brazos", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KCLL&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.19, 
                twentyFifthPercentile: 10.74, 
                tenthPercentile: 9.55, 
                thirdPercentile: 8.43
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.63, 
                twentyFifthPercentile: 16.15, 
                tenthPercentile: 14.91, 
                thirdPercentile: 13.64
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.14, 
                twentyFifthPercentile: 17.75, 
                tenthPercentile: 16.53, 
                thirdPercentile: 15.24
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Bastrop", 
        stationId: "415501", 
        stationLatitude: 30.20139, 
        stationLongitute: -97.30361, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Bastrop", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BTRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.84, 
                twentyFifthPercentile: 10.27, 
                tenthPercentile: 9.22, 
                thirdPercentile: 8.20
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.45, 
                twentyFifthPercentile: 15.61, 
                tenthPercentile: 14.47, 
                thirdPercentile: 13.39
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.30, 
                twentyFifthPercentile: 17.34, 
                tenthPercentile: 16.00, 
                thirdPercentile: 14.76
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 75, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 74, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "LaGrange", 
        stationId: "415602", 
        stationLatitude: 29.9075, 
        stationLongitute: -96.86, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Fayette", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LGNT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.70, 
                twentyFifthPercentile: 10.23, 
                tenthPercentile: 9.28, 
                thirdPercentile: 8.43
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.28, 
                twentyFifthPercentile: 15.56, 
                tenthPercentile: 14.56, 
                thirdPercentile: 13.69
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.16, 
                twentyFifthPercentile: 17.28, 
                tenthPercentile: 16.03, 
                thirdPercentile: 15.13
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 76, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Neaslony WMA", 
        stationId: "416401", 
        stationLatitude: 29.55714, 
        stationLongitute: -97.68397, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Gonzales", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=NWMT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.67, 
                twentyFifthPercentile: 10.23, 
                tenthPercentile: 9.28, 
                thirdPercentile: 8.48
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.17, 
                twentyFifthPercentile: 15.48, 
                tenthPercentile: 14.52, 
                thirdPercentile: 13.66
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.08, 
                twentyFifthPercentile: 17.27, 
                tenthPercentile: 16.01, 
                thirdPercentile: 15.11
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 77, 
                thirdPercentile: 92
            } 
        ]
    }, 
    {
        stationName: "Attwater", 
        stationId: "416601", 
        stationLatitude: 29.67042, 
        stationLongitute: -96.26817, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Colorado", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=ANWT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.22, 
                twentyFifthPercentile: 10.82, 
                tenthPercentile: 9.85, 
                thirdPercentile: 9.00
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.67, 
                twentyFifthPercentile: 15.91, 
                tenthPercentile: 14.85, 
                thirdPercentile: 14.03
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.55, 
                twentyFifthPercentile: 17.62, 
                tenthPercentile: 16.47, 
                thirdPercentile: 15.67
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 54, 
                tenthPercentile: 68, 
                thirdPercentile: 84
            } 
        ]
    }, 
    {
        stationName: "Victoria Regional", 
        stationId: "418203", 
        stationLatitude: 28.8625, 
        stationLongitute: -96.92972, 
        predicitveServiceArea: "Central Texas", 
        stationCounty: "Victoria", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KVCT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.73, 
                twentyFifthPercentile: 11.44, 
                tenthPercentile: 10.61, 
                thirdPercentile: 9.73
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.12, 
                twentyFifthPercentile: 16.51, 
                tenthPercentile: 15.66, 
                thirdPercentile: 15.12
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.79, 
                twentyFifthPercentile: 18.19, 
                tenthPercentile: 17.24, 
                thirdPercentile: 16.74
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 77, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Possum Kingdom SP", 
        stationId: "419402", 
        stationLatitude: 32.86722, 
        stationLongitute: -98.59722, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "Palo Pinto", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=PKLT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.01, 
                twentyFifthPercentile: 8.30, 
                tenthPercentile: 6.89, 
                thirdPercentile: 5.67
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.25, 
                twentyFifthPercentile: 13.22, 
                tenthPercentile: 11.20, 
                thirdPercentile: 9.26
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.73, 
                twentyFifthPercentile: 14.92, 
                tenthPercentile: 13.02, 
                thirdPercentile: 10.70
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Comanche", 
        stationId: "419403", 
        stationLatitude: 31.92417, 
        stationLongitute: -98.59722, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "Comanche", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=COAT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.23, 
                twentyFifthPercentile: 8.55, 
                tenthPercentile: 7.24, 
                thirdPercentile: 6.04
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.40, 
                twentyFifthPercentile: 13.56, 
                tenthPercentile: 11.64, 
                thirdPercentile: 9.83
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.98, 
                twentyFifthPercentile: 15.24, 
                tenthPercentile: 13.52, 
                thirdPercentile: 11.28
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Mineral Wells Regional", 
        stationId: "419404", 
        stationLatitude: 33.28267, 
        stationLongitute: -97.63206, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "Parker", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KMWL&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.26, 
                twentyFifthPercentile: 9.81, 
                tenthPercentile: 8.41, 
                thirdPercentile: 6.88
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.34, 
                twentyFifthPercentile: 14.75, 
                tenthPercentile: 13.13, 
                thirdPercentile: 11.12
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.66, 
                twentyFifthPercentile: 16.23, 
                tenthPercentile: 14.78, 
                thirdPercentile: 12.48
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "LBJ", 
        stationId: "419601", 
        stationLatitude: 33.28267, 
        stationLongitute: -97.63206, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "Wise", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LBJT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.86, 
                twentyFifthPercentile: 9.16, 
                tenthPercentile: 7.80, 
                thirdPercentile: 6.38
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.15, 
                twentyFifthPercentile: 14.25, 
                tenthPercentile: 12.41, 
                thirdPercentile: 10.39
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.74, 
                twentyFifthPercentile: 16.05, 
                tenthPercentile: 14.29, 
                thirdPercentile: 11.72
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 67, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Denton Muni. Apt.", 
        stationId: "419603", 
        stationLatitude: 33.20505, 
        stationLongitute: -97.20061, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "Denton", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KDTO&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.64, 
                twentyFifthPercentile: 10.16, 
                tenthPercentile: 8.85, 
                thirdPercentile: 7.51
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.84, 
                twentyFifthPercentile: 15.22, 
                tenthPercentile: 13.69, 
                thirdPercentile: 11.95
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.19, 
                twentyFifthPercentile: 16.81, 
                tenthPercentile: 15.28, 
                thirdPercentile: 13.24
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Granbury", 
        stationId: "419702", 
        stationLatitude: 32.4415, 
        stationLongitute: -97.82631, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "Hood", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=GRYT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.74, 
                twentyFifthPercentile: 9.07, 
                tenthPercentile: 7.51, 
                thirdPercentile: 6.07
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.06, 
                twentyFifthPercentile: 14.24, 
                tenthPercentile: 12.34, 
                thirdPercentile: 9.96
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.64, 
                twentyFifthPercentile: 15.87, 
                tenthPercentile: 14.03, 
                thirdPercentile: 11.21
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "McGregor", 
        stationId: "419802", 
        stationLatitude: 31.38389, 
        stationLongitute: -97.41278, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "McLennan", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=MEGT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.19, 
                twentyFifthPercentile: 9.53, 
                tenthPercentile: 8.38, 
                thirdPercentile: 6.98
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.57, 
                twentyFifthPercentile: 14.79, 
                tenthPercentile: 13.29, 
                thirdPercentile: 11.51
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.33, 
                twentyFifthPercentile: 16.50, 
                tenthPercentile: 14.79, 
                thirdPercentile: 12.83
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 73, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Waco Regional", 
        stationId: "419803", 
        stationLatitude: 31.61722, 
        stationLongitute: -97.22778, 
        predicitveServiceArea: "Cross Timbers", 
        stationCounty: "McLennan", 
        stationNetwork: "ASOS", 
        stationUrl: "hthttps://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KACT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.79, 
                twentyFifthPercentile: 10.26, 
                tenthPercentile: 8.91, 
                thirdPercentile: 7.56
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.17, 
                twentyFifthPercentile: 15.50, 
                tenthPercentile: 13.99, 
                thirdPercentile: 12.29
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.63, 
                twentyFifthPercentile: 17.07, 
                tenthPercentile: 15.39, 
                thirdPercentile: 13.49
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 75, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Mason", 
        stationId: "417801", 
        stationLatitude: 30.73583, 
        stationLongitute: -99.18639, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Mason", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=MSAT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.30, 
                twentyFifthPercentile: 8.77, 
                tenthPercentile: 7.50, 
                thirdPercentile: 6.31
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.73, 
                twentyFifthPercentile: 14.01, 
                tenthPercentile: 12.32, 
                thirdPercentile: 10.65
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.32, 
                twentyFifthPercentile: 15.73, 
                tenthPercentile: 14.05, 
                thirdPercentile: 12.19
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Lost Maples SNA", 
        stationId: "417802", 
        stationLatitude: 29.82389, 
        stationLongitute: -99.59944, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Bandera", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LMNT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.28, 
                twentyFifthPercentile: 9.75, 
                tenthPercentile: 8.64, 
                thirdPercentile: 7.68
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.69, 
                twentyFifthPercentile: 15.07, 
                tenthPercentile: 13.74, 
                thirdPercentile: 12.42
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.29, 
                twentyFifthPercentile: 16.70, 
                tenthPercentile: 15.54, 
                thirdPercentile: 14.52
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 77, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Bird", 
        stationId: "417901", 
        stationLatitude: 30.2625, 
        stationLongitute: -98.62889, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Gillespie", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BDTT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.55, 
                twentyFifthPercentile: 9.72, 
                tenthPercentile: 8.48, 
                thirdPercentile: 7.26
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.25, 
                twentyFifthPercentile: 15.14, 
                tenthPercentile: 13.55, 
                thirdPercentile: 12.10
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.99, 
                twentyFifthPercentile: 16.95, 
                tenthPercentile: 15.36, 
                thirdPercentile: 13.71
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Baclones Canyonlands", 
        stationId: "417902", 
        stationLatitude: 30.5665, 
        stationLongitute: -98.03875, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Travis", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BNET2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.18, 
                twentyFifthPercentile: 9.60, 
                tenthPercentile: 8.44, 
                thirdPercentile: 7.13
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.73, 
                twentyFifthPercentile: 14.91, 
                tenthPercentile: 13.57, 
                thirdPercentile: 12.10
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.44, 
                twentyFifthPercentile: 16.64, 
                tenthPercentile: 15.14, 
                thirdPercentile: 13.53
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Balcones Flying X", 
        stationId: "417903", 
        stationLatitude: 30.62987, 
        stationLongitute: -98.08192, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Burnet", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BFXT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.16, 
                twentyFifthPercentile: 9.54, 
                tenthPercentile: 8.28, 
                thirdPercentile: 7.00
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.70, 
                twentyFifthPercentile: 14.89, 
                tenthPercentile: 13.44, 
                thirdPercentile: 11.77
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.43,
                twentyFifthPercentile: 16.65,
                tenthPercentile: 15.16,
                thirdPercentile: 13.35,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "East Austin", 
        stationId: "417904", 
        stationLatitude: 30.2625, 
        stationLongitute: -97.61542, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Travis", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=EAUT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.72, 
                twentyFifthPercentile: 10.16, 
                tenthPercentile: 9.10, 
                thirdPercentile: 8.00
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.32, 
                twentyFifthPercentile: 15.52, 
                tenthPercentile: 14.34, 
                thirdPercentile: 13.17
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.14, 
                twentyFifthPercentile: 17.27, 
                tenthPercentile: 15.93, 
                thirdPercentile: 14.59
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 75, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "South Austin", 
        stationId: "417905", 
        stationLatitude: 30.17667, 
        stationLongitute: -9887417, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Travis", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=AURT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.71, 
                twentyFifthPercentile: 10.21, 
                tenthPercentile: 9.20, 
                thirdPercentile: 8.23
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.10, 
                twentyFifthPercentile: 15.54, 
                tenthPercentile: 14.46, 
                thirdPercentile: 13.43
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.79, 
                twentyFifthPercentile: 17.19, 
                tenthPercentile: 15.96, 
                thirdPercentile: 14.99
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 79, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Guadalupe River SP", 
        stationId: "418101", 
        stationLatitude: 29.85944, 
        stationLongitute: -9850528, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Comal", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=GUPT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.06, 
                twentyFifthPercentile: 9.51, 
                tenthPercentile: 8.38, 
                thirdPercentile: 7.36
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.69, 
                twentyFifthPercentile: 14.90, 
                tenthPercentile: 13.65, 
                thirdPercentile: 12.36
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.52, 
                twentyFifthPercentile: 16.70, 
                tenthPercentile: 15.33, 
                thirdPercentile: 14.00
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 75, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 76, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "New Braunfels Muni. Apt.", 
        stationId: "418105", 
        stationLatitude: 29.70575, 
        stationLongitute: -98.04322, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Guadalupe", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KBAZ&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.79, 
                twentyFifthPercentile: 10.31, 
                tenthPercentile: 9.24, 
                thirdPercentile: 8.26
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.11, 
                twentyFifthPercentile: 15.64, 
                tenthPercentile: 14.52, 
                thirdPercentile: 13.35
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.67, 
                twentyFifthPercentile: 17.23, 
                tenthPercentile: 16.10, 
                thirdPercentile: 15.17
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 80, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Colorado Bend SP", 
        stationId: "419501", 
        stationLatitude: 31.04944, 
        stationLongitute: -98.525, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "San Saba", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CBDT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.46, 
                twentyFifthPercentile: 8.81, 
                tenthPercentile: 7.52, 
                thirdPercentile: 6.28
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.87, 
                twentyFifthPercentile: 14.08, 
                tenthPercentile: 12.51, 
                thirdPercentile: 10.75
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.55, 
                twentyFifthPercentile: 15.87, 
                tenthPercentile: 14.20, 
                thirdPercentile: 12.22
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Temple", 
        stationId: "49801", 
        stationLatitude: 31.05753, 
        stationLongitute: -97.34875, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Bell", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=TMPT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.10, 
                twentyFifthPercentile: 9.51, 
                tenthPercentile: 8.29, 
                thirdPercentile: 7.08
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.66, 
                twentyFifthPercentile: 14.89, 
                tenthPercentile: 13.42, 
                thirdPercentile: 11.71
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.37, 
                twentyFifthPercentile: 16.75, 
                tenthPercentile: 15.15, 
                thirdPercentile: 13.16
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Fort Hood - LiveFire", 
        stationId: "419804", 
        stationLatitude: 31.30694, 
        stationLongitute: -97.776083, 
        predicitveServiceArea: "Eastern Hill Country", 
        stationCounty: "Coryell", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=TT704&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.82, 
                twentyFifthPercentile: 9.22, 
                tenthPercentile: 7.96, 
                thirdPercentile: 6.83
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.29, 
                twentyFifthPercentile: 14.54, 
                tenthPercentile: 13.04, 
                thirdPercentile: 11.36
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.98, 
                twentyFifthPercentile: 16.33, 
                tenthPercentile: 14.76, 
                thirdPercentile: 12.86
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Cedar", 
        stationId: "418701", 
        stationLatitude: 35.69028, 
        stationLongitute: -101.56833, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Hutchinson", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CEDT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.34, 
                twentyFifthPercentile: 7.65, 
                tenthPercentile: 6.26, 
                thirdPercentile: 5.04
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 12.95, 
                twentyFifthPercentile: 11.16, 
                tenthPercentile: 9.72, 
                thirdPercentile: 8.29
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.16, 
                twentyFifthPercentile: 12.56, 
                tenthPercentile: 11.14, 
                thirdPercentile: 9.54
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Dalhart Muni. Apt.", 
        stationId: "418702", 
        stationLatitude: 36.02333, 
        stationLongitute: -102.54722, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Hartley", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KDHT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.76, 
                twentyFifthPercentile: 8.28, 
                tenthPercentile: 7.00, 
                thirdPercentile: 5.91
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 12.96, 
                twentyFifthPercentile: 11.48, 
                tenthPercentile: 10.46, 
                thirdPercentile: 9.34
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.03, 
                twentyFifthPercentile: 12.68, 
                tenthPercentile: 11.66, 
                thirdPercentile: 10.74,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 61, 
                twentyFifthPercentile: 72, 
                tenthPercentile: 82, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Candian", 
        stationId: "418703", 
        stationLatitude: 35.918, 
        stationLongitute: -100.285, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Hemphill", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.11, 
                twentyFifthPercentile: 8.53, 
                tenthPercentile: 7.35, 
                thirdPercentile: 6.16
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.46, 
                twentyFifthPercentile: 12.66, 
                tenthPercentile: 11.26, 
                thirdPercentile: 10.18
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.76, 
                twentyFifthPercentile: 14.34, 
                tenthPercentile: 12.78, 
                thirdPercentile: 11.54
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 55, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Stinnett", 
        stationId: "418704", 
        stationLatitude: 36.364, 
        stationLongitute: -101.182, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Hutchinson", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.40, 
                twentyFifthPercentile: 7.74, 
                tenthPercentile: 6.36, 
                thirdPercentile: 5.14
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.04, 
                twentyFifthPercentile: 11.25, 
                tenthPercentile: 9.82, 
                thirdPercentile: 8.36
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.27, 
                twentyFifthPercentile: 12.65, 
                tenthPercentile: 11.24, 
                thirdPercentile: 9.59
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Palo Duro Resevoir", 
        stationId: "418705", 
        stationLatitude: 36.364, 
        stationLongitute: -101.182, 
        predicitveServiceArea: "High Plains", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.43, 
                twentyFifthPercentile: 7.78, 
                tenthPercentile: 6.39, 
                thirdPercentile: 5.20
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.09, 
                twentyFifthPercentile: 11.29, 
                tenthPercentile: 9.87, 
                thirdPercentile: 8.39
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.28, 
                twentyFifthPercentile: 12.69, 
                tenthPercentile: 11.26, 
                thirdPercentile: 9.58
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Bootleg", 
        stationId: "418801", 
        stationLatitude: 34.82861, 
        stationLongitute: -102.80944, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Deaf Smith", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BLGT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.51, 
                twentyFifthPercentile: 7.97, 
                tenthPercentile: 6.69, 
                thirdPercentile: 5.47
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.60, 
                twentyFifthPercentile: 11.78, 
                tenthPercentile: 10.32, 
                thirdPercentile: 9.26
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.00, 
                twentyFifthPercentile: 13.22, 
                tenthPercentile: 11.87, 
                thirdPercentile: 10.67
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Wheeler", 
        stationId: "418802", 
        stationLatitude: 35.44647, 
        stationLongitute: -100.19831, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Wheeler", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=WHRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.09, 
                twentyFifthPercentile: 8.55, 
                tenthPercentile: 7.36, 
                thirdPercentile: 6.27
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.53, 
                twentyFifthPercentile: 12.75, 
                tenthPercentile: 11.33, 
                thirdPercentile: 10.23
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.92, 
                twentyFifthPercentile: 14.50, 
                tenthPercentile: 12.87, 
                thirdPercentile: 11.89
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 55, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 80, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Amarillo Int. Apt.", 
        stationId: "418803", 
        stationLatitude: 35.22, 
        stationLongitute: -101.71722, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Potter", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KAMA&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.85, 
                twentyFifthPercentile: 8.22, 
                tenthPercentile: 6.85, 
                thirdPercentile: 5.65
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.48, 
                twentyFifthPercentile: 11.72, 
                tenthPercentile: 10.42, 
                thirdPercentile: 9.20
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.60, 
                twentyFifthPercentile: 13.16, 
                tenthPercentile: 11.74, 
                thirdPercentile: 10.71
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 70, 
                tenthPercentile: 79, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Pampa", 
        stationId: "418804", 
        stationLatitude: 35.540, 
        stationLongitute: -100.928, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Gray", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.22, 
                twentyFifthPercentile: 8.64, 
                tenthPercentile: 7.22, 
                thirdPercentile: 5.95
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.27, 
                twentyFifthPercentile: 12.61, 
                tenthPercentile: 11.12, 
                thirdPercentile: 9.80
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.54, 
                twentyFifthPercentile: 14.13, 
                tenthPercentile: 12.66, 
                thirdPercentile: 11.24
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 77, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Clarendon", 
        stationId: "418805", 
        stationLatitude: 34.925, 
        stationLongitute: -100.931, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Donley", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.94, 
                twentyFifthPercentile: 8.25, 
                tenthPercentile: 6.84, 
                thirdPercentile: 5.58
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.92, 
                twentyFifthPercentile: 12.10, 
                tenthPercentile: 10.56, 
                thirdPercentile: 9.20
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.16, 
                twentyFifthPercentile: 13.63, 
                tenthPercentile: 12.08, 
                thirdPercentile: 10.75
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Boys Ranch", 
        stationId: "418806", 
        stationLatitude: 35.526, 
        stationLongitute: -102.268, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Oldham", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.35, 
                twentyFifthPercentile: 7.66, 
                tenthPercentile: 6.24, 
                thirdPercentile: 5.03
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 12.91, 
                twentyFifthPercentile: 11.10, 
                tenthPercentile: 9.69, 
                thirdPercentile: 8.26
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.09, 
                twentyFifthPercentile: 12.49, 
                tenthPercentile: 11.07, 
                thirdPercentile: 9.55
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 58, 
                twentyFifthPercentile: 70, 
                tenthPercentile: 80, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Bootleg WTM", 
        stationId: "418807", 
        stationLatitude: 34.886, 
        stationLongitute: -102.991, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Deaf Smith", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.51, 
                twentyFifthPercentile: 7.96, 
                tenthPercentile: 6.75, 
                thirdPercentile: 5.50
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.24, 
                twentyFifthPercentile: 11.45, 
                tenthPercentile: 10.16, 
                thirdPercentile: 9.16
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.61, 
                twentyFifthPercentile: 12.84, 
                tenthPercentile: 11.61, 
                thirdPercentile: 10.60
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 58, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Adrian", 
        stationId: "418808", 
        stationLatitude: 35.254, 
        stationLongitute: -102.762, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Oldham", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.50, 
                twentyFifthPercentile: 7.92, 
                tenthPercentile: 6.64, 
                thirdPercentile: 5.47
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.49, 
                twentyFifthPercentile: 11.63, 
                tenthPercentile: 10.29, 
                thirdPercentile: 9.09
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.82, 
                twentyFifthPercentile: 13.06, 
                tenthPercentile: 11.72, 
                thirdPercentile: 10.65
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 70, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Umbarger", 
        stationId: "418809", 
        stationLatitude: 34.987, 
        stationLongitute: -102.084, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Randall", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.84, 
                twentyFifthPercentile: 8.25, 
                tenthPercentile: 6.86, 
                thirdPercentile: 5.72
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.52, 
                twentyFifthPercentile: 11.77, 
                tenthPercentile: 10.39, 
                thirdPercentile: 9.24
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.69, 
                twentyFifthPercentile: 13.19, 
                tenthPercentile: 11.73, 
                thirdPercentile: 10.74
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 70, 
                tenthPercentile: 80, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Panhandle", 
        stationId: "418810", 
        stationLatitude: 35.330, 
        stationLongitute: -101.386, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Carson", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.54, 
                twentyFifthPercentile: 7.88, 
                tenthPercentile: 6.49, 
                thirdPercentile: 5.24
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.28, 
                twentyFifthPercentile: 11.45, 
                tenthPercentile: 9.99, 
                thirdPercentile: 8.47
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.50, 
                twentyFifthPercentile: 12.86, 
                tenthPercentile: 11.46, 
                thirdPercentile: 9.58
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 78, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Claude", 
        stationId: "418812", 
        stationLatitude: 34.983, 
        stationLongitute: -101.501, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Armstrong", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.73, 
                twentyFifthPercentile: 8.06, 
                tenthPercentile: 6.74, 
                thirdPercentile: 5.55
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.42, 
                twentyFifthPercentile: 11.63, 
                tenthPercentile: 10.30, 
                thirdPercentile: 9.13
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.58, 
                twentyFifthPercentile: 13.11, 
                tenthPercentile: 11.68, 
                thirdPercentile: 10.61
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 56, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 80, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Lake McClellan", 
        stationId: "418813", 
        stationLatitude: 35.230, 
        stationLongitute: -100.900, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Gray", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.41, 
                twentyFifthPercentile: 7.76, 
                tenthPercentile: 6.37, 
                thirdPercentile: 5.19
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.12, 
                twentyFifthPercentile: 11.28, 
                tenthPercentile: 9.87, 
                thirdPercentile: 8.39
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.32, 
                twentyFifthPercentile: 12.73, 
                tenthPercentile: 11.28, 
                thirdPercentile: 9.55
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 55, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 78, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Caprock SP", 
        stationId: "418901", 
        stationLatitude: 34.41056, 
        stationLongitute: -101.04917, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Briscoe", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CAPT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.95, 
                twentyFifthPercentile: 7.30, 
                tenthPercentile: 6.05, 
                thirdPercentile: 4.89,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.07, 
                twentyFifthPercentile: 11.18, 
                tenthPercentile: 9.78, 
                thirdPercentile: 8.35
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.44, 
                twentyFifthPercentile: 12.75, 
                tenthPercentile: 11.20, 
                thirdPercentile: 9.92
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 76, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Quitaque", 
        stationId: "418903", 
        stationLatitude: 34.413, 
        stationLongitute: -101.068, 
        predicitveServiceArea: "High Plains", 
        stationCounty: "Briscoe", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.17, 
                twentyFifthPercentile: 7.40, 
                tenthPercentile: 6.04, 
                thirdPercentile: 4.87,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.28, 
                twentyFifthPercentile: 11.24, 
                tenthPercentile: 9.74, 
                thirdPercentile: 8.26
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.72, 
                twentyFifthPercentile: 12.90, 
                tenthPercentile: 11.14, 
                thirdPercentile: 9.72
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Aransas", 
        stationId: "418502", 
        stationLatitude: 28.30442, 
        stationLongitute: -96.82344, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Aransas", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=AFWT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.96, 
                twentyFifthPercentile: 11.35, 
                tenthPercentile: 10.33, 
                thirdPercentile: 9.37
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.65, 
                twentyFifthPercentile: 15.96, 
                tenthPercentile: 14.78, 
                thirdPercentile: 13.96
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.49, 
                twentyFifthPercentile: 17.84, 
                tenthPercentile: 16.56, 
                thirdPercentile: 15.82
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 69, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 53, 
                tenthPercentile: 66, 
                thirdPercentile: 79
            } 
        ]
    }, 
    {
        stationName: "Matagorda Island", 
        stationId: "418503", 
        stationLatitude: 28.12289, 
        stationLongitute: -96.80219, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Calhoun", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=MIRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.46, 
                twentyFifthPercentile: 12.82, 
                tenthPercentile: 11.49, 
                thirdPercentile: 10.47
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 22.29, 
                twentyFifthPercentile: 17.68, 
                tenthPercentile: 15.58, 
                thirdPercentile: 14.46
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 23.79, 
                twentyFifthPercentile: 19.42, 
                tenthPercentile: 17.40, 
                thirdPercentile: 16.20
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 39, 
                twentyFifthPercentile: 54, 
                tenthPercentile: 67, 
                thirdPercentile: 81
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 33, 
                twentyFifthPercentile: 49, 
                tenthPercentile: 61, 
                thirdPercentile: 73
            } 
        ]
    }, 
    {
        stationName: "Alice Int. Apt.", 
        stationId: "418504", 
        stationLatitude: 27.74111, 
        stationLongitute: -98.02694, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Jim Wells", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KALI&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.54, 
                twentyFifthPercentile: 10.83, 
                tenthPercentile: 9.90, 
                thirdPercentile: 8.70
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.31, 
                twentyFifthPercentile: 15.89, 
                tenthPercentile: 15.19, 
                thirdPercentile: 14.54
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.81, 
                twentyFifthPercentile: 17.53, 
                tenthPercentile: 16.79, 
                thirdPercentile: 16.30
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 76, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Padre", 
        stationId: "418505", 
        stationLatitude: 27.44306, 
        stationLongitute: -97.29333, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Kleberg", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=TT738&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.62, 
                twentyFifthPercentile: 10.93, 
                tenthPercentile: 9.98, 
                thirdPercentile: 8.86
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.41, 
                twentyFifthPercentile: 15.97, 
                tenthPercentile: 15.22, 
                thirdPercentile: 14.62
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.92, 
                twentyFifthPercentile: 17.61, 
                tenthPercentile: 16.84, 
                thirdPercentile: 16.39
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 78, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Falfurrias", 
        stationId: "418507", 
        stationLatitude: 27.200875, 
        stationLongitute: -98.12194, 
        predicitveServiceArea: "Lower Guld Coast", 
        stationCounty: "Brooks", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=VCRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.66, 
                twentyFifthPercentile: 9.95, 
                tenthPercentile: 9.22, 
                thirdPercentile: 8.48
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.65, 
                twentyFifthPercentile: 15.14, 
                tenthPercentile: 14.37, 
                thirdPercentile: 13.66
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.29, 
                twentyFifthPercentile: 16.76, 
                tenthPercentile: 15.93, 
                thirdPercentile: 15.34
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 79, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Santa Anna NWR", 
        stationId: "418602", 
        stationLatitude: 26.07842, 
        stationLongitute: -98.15728, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Hidalgo", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LWRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.21, 
                twentyFifthPercentile: 10.47, 
                tenthPercentile: 9.72, 
                thirdPercentile: 8.92
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.16, 
                twentyFifthPercentile: 15.62, 
                tenthPercentile: 14.79, 
                thirdPercentile: 14.21
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.70, 
                twentyFifthPercentile: 17.25, 
                tenthPercentile: 16.39, 
                thirdPercentile: 15.89
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 79, 
                thirdPercentile: 90
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Laguna Atascosa", 
        stationId: "418603", 
        stationLatitude: 26.22836, 
        stationLongitute: -97.34908, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Cameron", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=ATRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.95, 
                twentyFifthPercentile: 11.92, 
                tenthPercentile: 11.13, 
                thirdPercentile: 10.06
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.97, 
                twentyFifthPercentile: 16.33, 
                tenthPercentile: 15.46, 
                thirdPercentile: 14.95
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.62, 
                twentyFifthPercentile: 18.08, 
                tenthPercentile: 17.14, 
                thirdPercentile: 16.69
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 75, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 70, 
                thirdPercentile: 82
            } 
        ]
    }, 
    {
        stationName: "Linn-San Manuel", 
        stationId: "418605", 
        stationLatitude: 26.53639, 
        stationLongitute: -98.08778, 
        predicitveServiceArea: "Lower Gulf Coast", 
        stationCounty: "Hidalgo", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LSRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.54, 
                twentyFifthPercentile: 10.07, 
                tenthPercentile: 9.37, 
                thirdPercentile: 8.68
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.74, 
                twentyFifthPercentile: 15.24, 
                tenthPercentile: 14.38, 
                thirdPercentile: 13.54
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.32, 
                twentyFifthPercentile: 16.81, 
                tenthPercentile: 15.99, 
                thirdPercentile: 15.23
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 79, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Caddo", 
        stationId: "410202", 
        stationLatitude: 33.74089, 
        stationLongitute: -95.92236, 
        predicitveServiceArea: "North Texas", 
        stationCounty: "Fannin", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CDDT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.95, 
                twentyFifthPercentile: 10.39, 
                tenthPercentile: 9.32, 
                thirdPercentile: 8.04
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.38, 
                twentyFifthPercentile: 15.75, 
                tenthPercentile: 14.53, 
                thirdPercentile: 13.01
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.16, 
                twentyFifthPercentile: 17.62, 
                tenthPercentile: 16.22, 
                thirdPercentile: 14.70
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Athens", 
        stationId: "412101", 
        stationLatitude: 32.22111, 
        stationLongitute: -95.76611, 
        predicitveServiceArea: "North Texas", 
        stationCounty: "Henderson", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=RHAT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.67, 
                twentyFifthPercentile: 10.23, 
                tenthPercentile: 9.10, 
                thirdPercentile: 7.77
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.27, 
                twentyFifthPercentile: 15.76, 
                tenthPercentile: 14.53, 
                thirdPercentile: 13.01
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.19, 
                twentyFifthPercentile: 17.51, 
                tenthPercentile: 16.23, 
                thirdPercentile: 14.47
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Greenville", 
        stationId: "418602", 
        stationLatitude: 33.23833, 
        stationLongitute: -95.92472, 
        predicitveServiceArea: "North Texas", 
        stationCounty: "Hunt", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=GELT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.39, 
                twentyFifthPercentile: 9.97, 
                tenthPercentile: 8.73, 
                thirdPercentile: 7.42
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.86, 
                twentyFifthPercentile: 15.32, 
                tenthPercentile: 14.02, 
                thirdPercentile: 12.16
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.69, 
                twentyFifthPercentile: 17.19, 
                tenthPercentile: 15.73, 
                thirdPercentile: 13.60
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "McKinney ASOS", 
        stationId: "418604", 
        stationLatitude: 33.17778, 
        stationLongitute: -96.59028, 
        predicitveServiceArea: "North Texas", 
        stationCounty: "Collin", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KTKI&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.99, 
                twentyFifthPercentile: 10.57, 
                tenthPercentile: 9.32, 
                thirdPercentile: 7.97
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.33, 
                twentyFifthPercentile: 15.78, 
                tenthPercentile: 14.48, 
                thirdPercentile: 12.76
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.76, 
                twentyFifthPercentile: 17.43, 
                tenthPercentile: 16.08, 
                thirdPercentile: 14.16
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Cedar Hill SP", 
        stationId: "419701", 
        stationLatitude: 32.60917, 
        stationLongitute: -96.99306, 
        predicitveServiceArea: "North Texas", 
        stationCounty: "Dallas", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CDHT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.93, 
                twentyFifthPercentile: 9.31, 
                tenthPercentile: 7.86, 
                thirdPercentile: 6.57
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.50, 
                twentyFifthPercentile: 14.73, 
                tenthPercentile: 12.85, 
                thirdPercentile: 10.72
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.10, 
                twentyFifthPercentile: 16.57, 
                tenthPercentile: 14.62, 
                thirdPercentile: 12.01
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Terrell Muni. Apt.", 
        stationId: "419703", 
        stationLatitude: 32.71361, 
        stationLongitute: -96.26833, 
        predicitveServiceArea: "North Texas", 
        stationCounty: "Kaufman", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KTRL&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.91, 
                twentyFifthPercentile: 10.49, 
                tenthPercentile: 9.25, 
                thirdPercentile: 7.85
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.28, 
                twentyFifthPercentile: 15.80, 
                tenthPercentile: 14.45, 
                thirdPercentile: 12.65
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.75, 
                twentyFifthPercentile: 17.46, 
                tenthPercentile: 16.04, 
                thirdPercentile: 13.91
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 69, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Clarksville", 
        stationId: "410401", 
        stationLatitude: 33.62685, 
        stationLongitute: -95.09054, 
        predicitveServiceArea: "Northeast Texas", 
        stationCounty: "Red River", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CKST2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.83, 
                twentyFifthPercentile: 10.36, 
                tenthPercentile: 9.20, 
                thirdPercentile: 8.00
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.26, 
                twentyFifthPercentile: 15.64, 
                tenthPercentile: 14.39, 
                thirdPercentile: 12.77
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.14, 
                twentyFifthPercentile: 17.54, 
                tenthPercentile: 16.27, 
                thirdPercentile: 14.59
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 86,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Texarkana", 
        stationId: "410501", 
        stationLatitude: 33.37389, 
        stationLongitute: -94.04556, 
        predicitveServiceArea: "Northeast Texas", 
        stationCounty: "Bowie", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=TEXT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.33, 
                twentyFifthPercentile: 10.65, 
                tenthPercentile: 9.64, 
                thirdPercentile: 8.93
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.53, 
                twentyFifthPercentile: 15.56, 
                tenthPercentile: 14.26, 
                thirdPercentile: 13.51
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.65, 
                twentyFifthPercentile: 17.54, 
                tenthPercentile: 16.09, 
                thirdPercentile: 15.31
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 72, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Linden", 
        stationId: "411102", 
        stationLatitude: 33.005, 
        stationLongitute: -94.35778, 
        predicitveServiceArea: "Northeast Texas", 
        stationCounty: "Cass", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=DENT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.98, 
                twentyFifthPercentile: 10.48, 
                tenthPercentile: 9.44, 
                thirdPercentile: 8.37
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.54, 
                twentyFifthPercentile: 15.74, 
                tenthPercentile: 14.57, 
                thirdPercentile: 13.58
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.56, 
                twentyFifthPercentile: 17.63, 
                tenthPercentile: 16.40, 
                thirdPercentile: 15.31
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Gilmer", 
        stationId: "411401", 
        stationLatitude: 32.70111, 
        stationLongitute: -94.94472, 
        predicitveServiceArea: "Northeast Texas", 
        stationCounty: "Upshur", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=GLMT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.97, 
                twentyFifthPercentile: 10.56, 
                tenthPercentile: 9.55, 
                thirdPercentile: 8.38
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.54, 
                twentyFifthPercentile: 15.90, 
                tenthPercentile: 14.83, 
                thirdPercentile: 13.78
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.53, 
                twentyFifthPercentile: 17.72, 
                tenthPercentile: 16.57, 
                thirdPercentile: 15.41
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 85,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Tyler Pounds Field", 
        stationId: "411701", 
        stationLatitude: 32.35861, 
        stationLongitute: -95.40389, 
        predicitveServiceArea: "Northeast Texas", 
        stationCounty: "Smith", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KTYR&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.10, 
                twentyFifthPercentile: 10.70, 
                tenthPercentile: 9.43, 
                thirdPercentile: 8.18,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.59, 
                twentyFifthPercentile: 16.14, 
                tenthPercentile: 14.77, 
                thirdPercentile: 13.13
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.16, 
                twentyFifthPercentile: 17.79, 
                tenthPercentile: 16.48, 
                thirdPercentile: 14.62
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 85
            } 
        ]
    }, 
    {
        stationName: "Caddo Lake NWR", 
        stationId: "411901", 
        stationLatitude: 32.65822, 
        stationLongitute: 94.1165, 
        predicitveServiceArea: "Northeast Texas", 
        stationCounty: "Harrison", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CADT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.61, 
                twentyFifthPercentile: 10.83, 
                tenthPercentile: 9.78, 
                thirdPercentile: 8.99
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.76, 
                twentyFifthPercentile: 15.86, 
                tenthPercentile: 14.51, 
                thirdPercentile: 13.73
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.81, 
                twentyFifthPercentile: 17.76, 
                tenthPercentile: 16.41, 
                thirdPercentile: 15.54
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 72, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Henderson", 
        stationId: "412202", 
        stationLatitude: 32.13669, 
        stationLongitute: -94.84736, 
        predicitveServiceArea: "Northeast Texas", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=HDRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.01, 
                twentyFifthPercentile: 10.52, 
                tenthPercentile: 9.51, 
                thirdPercentile: 8.52
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.68, 
                twentyFifthPercentile: 15.88, 
                tenthPercentile: 14.82, 
                thirdPercentile: 13.84
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.64, 
                twentyFifthPercentile: 17.69, 
                tenthPercentile: 16.45, 
                thirdPercentile: 15.30
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 85
            } 
        ]
    }, 
    {
        stationName: "Dozier", 
        stationId: "418811", 
        stationLatitude: 35.08, 
        stationLongitute: -100.391, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Collingsworth", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.64, 
                twentyFifthPercentile: 8.01, 
                tenthPercentile: 6.62, 
                thirdPercentile: 5.29
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.10, 
                twentyFifthPercentile: 12.10, 
                tenthPercentile: 10.54, 
                thirdPercentile: 8.86
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.43, 
                twentyFifthPercentile: 13.66, 
                tenthPercentile: 12.11, 
                thirdPercentile: 10.46
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 75, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Matador WMA", 
        stationId: "418902", 
        stationLatitude: 34.11754, 
        stationLongitute: -100.34458, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Cottle", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=MATT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.48, 
                twentyFifthPercentile: 7.79, 
                tenthPercentile: 6.37, 
                thirdPercentile: 5.03
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.90, 
                twentyFifthPercentile: 11.90, 
                tenthPercentile: 10.26, 
                thirdPercentile: 8.58
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.26, 
                twentyFifthPercentile: 13.45, 
                tenthPercentile: 11.91, 
                thirdPercentile: 10.08
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Roaring Springs", 
        stationId: "418906", 
        stationLatitude: 33.936, 
        stationLongitute: -100.845, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Motley", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.89, 
                twentyFifthPercentile: 8.17, 
                tenthPercentile: 6.75, 
                thirdPercentile: 5.50
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.40, 
                twentyFifthPercentile: 12.25, 
                tenthPercentile: 10.52, 
                thirdPercentile: 9.08
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.67, 
                twentyFifthPercentile: 13.88, 
                tenthPercentile: 12.14, 
                thirdPercentile: 10.54
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Estelline", 
        stationId: "418907", 
        stationLatitude: 34.498, 
        stationLongitute: -100.422, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Hall", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.49, 
                twentyFifthPercentile: 7.82, 
                tenthPercentile: 6.40, 
                thirdPercentile: 5.08
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.89, 
                twentyFifthPercentile: 11.92, 
                tenthPercentile: 10.30, 
                thirdPercentile: 8.65
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.24, 
                twentyFifthPercentile: 13.46, 
                tenthPercentile: 11.86, 
                thirdPercentile: 10.14
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Jayton", 
        stationId: "419001", 
        stationLatitude: 33.2325, 
        stationLongitute: -100.56778, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Kent", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=JJYT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.36, 
                twentyFifthPercentile: 7.72, 
                tenthPercentile: 6.42, 
                thirdPercentile: 5.31
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.72, 
                twentyFifthPercentile: 11.70, 
                tenthPercentile: 10.09, 
                thirdPercentile: 8.74
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.99, 
                twentyFifthPercentile: 13.17, 
                tenthPercentile: 11.55, 
                thirdPercentile: 10.09
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 76, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Jayton WTM", 
        stationId: "419003", 
        stationLatitude: 33.232, 
        stationLongitute: -100.568, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Kent", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.68, 
                twentyFifthPercentile: 7.92, 
                tenthPercentile: 6.51, 
                thirdPercentile: 5.33
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.18, 
                twentyFifthPercentile: 12.16, 
                tenthPercentile: 10.45, 
                thirdPercentile: 8.76
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.50, 
                twentyFifthPercentile: 13.70, 
                tenthPercentile: 12.14, 
                thirdPercentile: 9.93
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 74, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Guthrie", 
        stationId: "419006", 
        stationLatitude: 33.567, 
        stationLongitute: -100.481, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "King", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.50, 
                twentyFifthPercentile: 7.83, 
                tenthPercentile: 6.44, 
                thirdPercentile: 5.22
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.98, 
                twentyFifthPercentile: 11.89, 
                tenthPercentile: 10.24, 
                thirdPercentile: 8.52
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.25, 
                twentyFifthPercentile: 13.37, 
                tenthPercentile: 11.88, 
                thirdPercentile: 9.82
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 75, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Sweetwater", 
        stationId: "419104", 
        stationLatitude: 32.346, 
        stationLongitute: -100.528, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Nolan", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.54, 
                twentyFifthPercentile: 7.75, 
                tenthPercentile: 6.39, 
                thirdPercentile: 5.27
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.32, 
                twentyFifthPercentile: 12.15, 
                tenthPercentile: 10.29, 
                thirdPercentile: 8.62
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.72, 
                twentyFifthPercentile: 13.76, 
                tenthPercentile: 12.05, 
                thirdPercentile: 9.65
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 72, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Snyder", 
        stationId: "419105", 
        stationLatitude: 32.716, 
        stationLongitute: -100.862, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Scurry", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.79, 
                twentyFifthPercentile: 8.00, 
                tenthPercentile: 6.63, 
                thirdPercentile: 5.52
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.46, 
                twentyFifthPercentile: 12.31, 
                tenthPercentile: 10.54, 
                thirdPercentile: 8.88
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.80, 
                twentyFifthPercentile: 13.86, 
                tenthPercentile: 12.27, 
                thirdPercentile: 9.97
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 75, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Paint Creek", 
        stationId: "419203", 
        stationLatitude: 31.90611, 
        stationLongitute: -100.58167, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Coke", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=PCKT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.33, 
                twentyFifthPercentile: 7.54, 
                tenthPercentile: 6.13, 
                thirdPercentile: 5.02
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.03, 
                twentyFifthPercentile: 11.86, 
                tenthPercentile: 10.00, 
                thirdPercentile: 8.28
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.45, 
                twentyFifthPercentile: 13.46, 
                tenthPercentile: 11.65, 
                thirdPercentile: 9.36
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Fort Chadbourne", 
        stationId: "419206", 
        stationLatitude: 32.042, 
        stationLongitute: -100.250, 
        predicitveServiceArea: "rolling Plains", 
        stationCounty: "Coke", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.66, 
                twentyFifthPercentile: 7.89, 
                tenthPercentile: 6.50, 
                thirdPercentile: 5.38
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.46, 
                twentyFifthPercentile: 12.31, 
                tenthPercentile: 10.55, 
                thirdPercentile: 8.75
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.88, 
                twentyFifthPercentile: 13.93, 
                tenthPercentile: 12.16, 
                thirdPercentile: 9.85
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Sterling City", 
        stationId: "419210", 
        stationLatitude: 31.826, 
        stationLongitute: -101.055, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Sterling", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.56, 
                twentyFifthPercentile: 7.79, 
                tenthPercentile: 6.42, 
                thirdPercentile: 5.32
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.28, 
                twentyFifthPercentile: 12.13, 
                tenthPercentile: 10.36, 
                thirdPercentile: 8.64
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.70, 
                twentyFifthPercentile: 13.74, 
                tenthPercentile: 12.06, 
                thirdPercentile: 9.72
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Miller Creek", 
        stationId: "419301", 
        stationLatitude: 33.41361, 
        stationLongitute: -99.40056, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Baylor", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=MCBT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.89, 
                twentyFifthPercentile: 8.20, 
                tenthPercentile: 6.72, 
                thirdPercentile: 5.54
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.66, 
                twentyFifthPercentile: 12.43, 
                tenthPercentile: 10.59, 
                thirdPercentile: 8.79
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.03, 
                twentyFifthPercentile: 14.01, 
                tenthPercentile: 12.20, 
                thirdPercentile: 9.88
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Sheppard AFB", 
        stationId: "419302", 
        stationLatitude: 33.49278, 
        stationLongitute: -99.49278, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Wichita", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KSPS&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.89, 
                twentyFifthPercentile: 9.36, 
                tenthPercentile: 7.90, 
                thirdPercentile: 6.43
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.76, 
                twentyFifthPercentile: 13.95, 
                tenthPercentile: 12.20, 
                thirdPercentile: 10.24
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.05, 
                twentyFifthPercentile: 15.44, 
                tenthPercentile: 13.85, 
                thirdPercentile: 11.66
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Goodlet", 
        stationId: "419303", 
        stationLatitude: 34.344, 
        stationLongitute: -99.94, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Hardeman", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.86, 
                twentyFifthPercentile: 8.08, 
                tenthPercentile: 6.63, 
                thirdPercentile: 5.35
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.36, 
                twentyFifthPercentile: 12.34, 
                tenthPercentile: 10.59, 
                thirdPercentile: 8.79
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.62, 
                twentyFifthPercentile: 13.80, 
                tenthPercentile: 12.19, 
                thirdPercentile: 10.27
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Odell", 
        stationId: "419304", 
        stationLatitude: 34.365, 
        stationLongitute: -99.354, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Wilbarger", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.37, 
                twentyFifthPercentile: 8.62, 
                tenthPercentile: 7.02, 
                thirdPercentile: 5.59
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.20, 
                twentyFifthPercentile: 13.29, 
                tenthPercentile: 11.28, 
                thirdPercentile: 9.09
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.59, 
                twentyFifthPercentile: 14.79, 
                tenthPercentile: 13.04, 
                thirdPercentile: 10.34
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Knox City", 
        stationId: "419305", 
        stationLatitude: 33.446, 
        stationLongitute: -99.865, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Knox", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.84, 
                twentyFifthPercentile: 8.07, 
                tenthPercentile: 6.53, 
                thirdPercentile: 5.20
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.46, 
                twentyFifthPercentile: 12.46, 
                tenthPercentile: 10.61, 
                thirdPercentile: 8.51
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.73, 
                twentyFifthPercentile: 13.87, 
                tenthPercentile: 12.09, 
                thirdPercentile: 9.55
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Throckmorton", 
        stationId: "419306", 
        stationLatitude: 33.168, 
        stationLongitute: -99.186, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Throckmorton", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.91, 
                twentyFifthPercentile: 8.32, 
                tenthPercentile: 6.78, 
                thirdPercentile: 5.54 
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.74, 
                twentyFifthPercentile: 12.62, 
                tenthPercentile: 10.78, 
                thirdPercentile: 8.77
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.15, 
                twentyFifthPercentile: 14.13, 
                tenthPercentile: 12.33, 
                thirdPercentile: 9.93
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86 
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Crowell", 
        stationId: "419307", 
        stationLatitude: 33.983, 
        stationLongitute: -99.712, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Foard", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.57, 
                twentyFifthPercentile: 7.89, 
                tenthPercentile: 6.44, 
                thirdPercentile: 5.13
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.06, 
                twentyFifthPercentile: 12.04, 
                tenthPercentile: 10.38, 
                thirdPercentile: 8.72
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.40, 
                twentyFifthPercentile: 13.53, 
                tenthPercentile: 12.06, 
                thirdPercentile: 10.11
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 74, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Seymour", 
        stationId: "419308", 
        stationLatitude: 33.632, 
        stationLongitute: -99.291, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Baylor", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.30, 
                twentyFifthPercentile: 8.51, 
                tenthPercentile: 6.84, 
                thirdPercentile: 5.53
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.14, 
                twentyFifthPercentile: 13.18, 
                tenthPercentile: 11.10, 
                thirdPercentile: 9.00
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.46, 
                twentyFifthPercentile: 14.71, 
                tenthPercentile: 12.74, 
                thirdPercentile: 10.37
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Stamford", 
        stationId: "419405", 
        stationLatitude: 32.909, 
        stationLongitute: -99.722, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Jones", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.88, 
                twentyFifthPercentile: 8.18, 
                tenthPercentile: 6.70, 
                thirdPercentile: 5.54
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.66, 
                twentyFifthPercentile: 12.47, 
                tenthPercentile: 10.63, 
                thirdPercentile: 8.74
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.03, 
                twentyFifthPercentile: 14.00, 
                tenthPercentile: 12.21, 
                thirdPercentile: 9.83
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Clyde", 
        stationId: "419407", 
        stationLatitude: 32.414, 
        stationLongitute: -99.534, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Callahan", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.04, 
                twentyFifthPercentile: 8.42, 
                tenthPercentile: 7.14, 
                thirdPercentile: 5.99
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.10, 
                twentyFifthPercentile: 13.08, 
                tenthPercentile: 11.39, 
                thirdPercentile: 9.77
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.52, 
                twentyFifthPercentile: 14.76, 
                tenthPercentile: 13.04, 
                thirdPercentile: 10.99
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Buffalo Gap", 
        stationId: "419408", 
        stationLatitude: 32.23017, 
        stationLongitute: -99.88758, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Taylor", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=HBYT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.34, 
                twentyFifthPercentile: 8.80, 
                tenthPercentile: 7.46, 
                thirdPercentile: 6.27
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.42, 
                twentyFifthPercentile: 13.56, 
                tenthPercentile: 11.90, 
                thirdPercentile: 9.97
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.88, 
                twentyFifthPercentile: 15.09, 
                tenthPercentile: 13.47, 
                thirdPercentile: 11.16
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Coleman", 
        stationId: "419502", 
        stationLatitude: 31.5145, 
        stationLongitute: -99.65075, 
        predicitveServiceArea: "Rolling Plains", 
        stationCounty: "Coleman", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=IVET2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.86, 
                twentyFifthPercentile: 8.20, 
                tenthPercentile: 6.89, 
                thirdPercentile: 5.88
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.91, 
                twentyFifthPercentile: 12.99, 
                tenthPercentile: 11.27, 
                thirdPercentile: 9.51
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.33, 
                twentyFifthPercentile: 14.60, 
                tenthPercentile: 12.93, 
                thirdPercentile: 10.89
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 73, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Kickapoo Caverns SP", 
        stationId: "418001", 
        stationLatitude: 29.60917, 
        stationLongitute: -100.47306, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Kinney", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KCPT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.41, 
                twentyFifthPercentile: 8.77, 
                tenthPercentile: 7.53, 
                thirdPercentile: 5.48
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.88, 
                twentyFifthPercentile: 13.93, 
                tenthPercentile: 12.44, 
                thirdPercentile: 10.97
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.64, 
                twentyFifthPercentile: 15.60, 
                tenthPercentile: 14.12, 
                thirdPercentile: 12.81
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 77, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Pearsall", 
        stationId: "418102", 
        stationLatitude: 28.885, 
        stationLongitute: -99.11056, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Frio", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=PSAT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.60, 
                twentyFifthPercentile: 9.18, 
                tenthPercentile: 8.18, 
                thirdPercentile: 7.16
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.11, 
                twentyFifthPercentile: 14.53, 
                tenthPercentile: 13.50, 
                thirdPercentile: 12.19
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.38, 
                twentyFifthPercentile: 16.18, 
                tenthPercentile: 15.12, 
                thirdPercentile: 14.07
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 77, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 79, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Hondo Muni. Apt.", 
        stationId: "418103", 
        stationLatitude: 29.35944, 
        stationLongitute: -99.17417, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Medina", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KHDO&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.41, 
                twentyFifthPercentile: 9.97, 
                tenthPercentile: 8.86, 
                thirdPercentile: 7.90
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.73, 
                twentyFifthPercentile: 15.18, 
                tenthPercentile: 13.92, 
                thirdPercentile: 12.66
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.16, 
                twentyFifthPercentile: 16.72, 
                tenthPercentile: 15.67, 
                thirdPercentile: 14.63
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 67, 
                tenthPercentile: 79, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Stinson Muni. Apt.", 
        stationId: "418104", 
        stationLatitude: 29.33889, 
        stationLongitute: -98.47167, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Bexar", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KSSF&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.54, 
                twentyFifthPercentile: 10.03, 
                tenthPercentile: 8.86, 
                thirdPercentile: 7.85
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.99, 
                twentyFifthPercentile: 15.47, 
                tenthPercentile: 14.25, 
                thirdPercentile: 12.96
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.49, 
                twentyFifthPercentile: 17.02, 
                tenthPercentile: 15.86, 
                thirdPercentile: 14.78
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 76, 
                thirdPercentile: 90
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 79, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "George West", 
        stationId: "418201", 
        stationLatitude: 28.46594, 
        stationLongitute: -98.25242, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Live Oak", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=GWRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.37, 
                twentyFifthPercentile: 10.00, 
                tenthPercentile: 9.07, 
                thirdPercentile: 8.15
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.85, 
                twentyFifthPercentile: 15.31, 
                tenthPercentile: 14.42, 
                thirdPercentile: 13.63
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.56, 
                twentyFifthPercentile: 17.03, 
                tenthPercentile: 16.11, 
                thirdPercentile: 15.34
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 75, 
                thirdPercentile: 90
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 79, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Hebronville", 
        stationId: "418401", 
        stationLatitude: 27.35278, 
        stationLongitute: -98.74389, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Jim Hogg", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=HVLT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.06, 
                twentyFifthPercentile: 9.64, 
                tenthPercentile: 8.81, 
                thirdPercentile: 7.89
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.54, 
                twentyFifthPercentile: 15.06, 
                tenthPercentile: 14.18, 
                thirdPercentile: 13.41
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 18.19, 
                twentyFifthPercentile: 16.72, 
                tenthPercentile: 15.75, 
                thirdPercentile: 15.07
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 79, 
                thirdPercentile: 92
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 81, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "La Salle Co. Apt.", 
        stationId: "418402", 
        stationLatitude: 28.45833, 
        stationLongitute: -99.22028, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "La Salle", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KCOT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 11.05, 
                twentyFifthPercentile: 9.50, 
                tenthPercentile: 8.46, 
                thirdPercentile: 7.35
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.43, 
                twentyFifthPercentile: 14.85, 
                tenthPercentile: 13.77, 
                thirdPercentile: 12.46
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.78, 
                twentyFifthPercentile: 16.35, 
                tenthPercentile: 15.31, 
                thirdPercentile: 14.31
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 75, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 67, 
                tenthPercentile: 80, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "La Puerta", 
        stationId: "418604", 
        stationLatitude: 26.37689, 
        stationLongitute: -98.72683, 
        predicitveServiceArea: "South Texas", 
        stationCounty: "Starr", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=FART2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.93, 
                twentyFifthPercentile: 9.57, 
                tenthPercentile: 8.78, 
                thirdPercentile: 7.77
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 16.39, 
                twentyFifthPercentile: 14.86, 
                tenthPercentile: 14.03, 
                thirdPercentile: 13.19
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.94, 
                twentyFifthPercentile: 16.45, 
                tenthPercentile: 15.56, 
                thirdPercentile: 14.94
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 78, 
                thirdPercentile: 89
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 66, 
                tenthPercentile: 80, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Lumberjack", 
        stationId: "412801", 
        stationLatitude: 31.75917, 
        stationLongitute: -94.65806, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Nacogdoches", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LMJT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.32, 
                twentyFifthPercentile: 10.82, 
                tenthPercentile: 9.81, 
                thirdPercentile: 8.99
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.82, 
                twentyFifthPercentile: 16.06, 
                tenthPercentile: 15.04, 
                thirdPercentile: 14.21
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.76, 
                twentyFifthPercentile: 17.86, 
                tenthPercentile: 16.67, 
                thirdPercentile: 15.74
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Sabine North", 
        stationId: "412901", 
        stationLatitude: 31.80247, 
        stationLongitute: -94.00022, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Shelby", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=DRKT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.98, 
                twentyFifthPercentile: 11.10, 
                tenthPercentile: 10.01, 
                thirdPercentile: 9.14
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.15, 
                twentyFifthPercentile: 16.05, 
                tenthPercentile: 14.87, 
                thirdPercentile: 14.02
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.04, 
                twentyFifthPercentile: 17.88, 
                tenthPercentile: 16.64, 
                thirdPercentile: 15.55
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 69, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 70, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Zavalla", 
        stationId: "413503", 
        stationLatitude: 31.17728, 
        stationLongitute: -94.38342, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Angelina", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=ZVLT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.41, 
                twentyFifthPercentile: 10.74, 
                tenthPercentile: 9.71, 
                thirdPercentile: 8.74
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.92, 
                twentyFifthPercentile: 16.99, 
                tenthPercentile: 14.93, 
                thirdPercentile: 14.11
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.86, 
                twentyFifthPercentile: 17.72, 
                tenthPercentile: 16.54, 
                thirdPercentile: 15.67
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 73, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 71, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Lufkin", 
        stationId: "413509", 
        stationLatitude: 31.31222, 
        stationLongitute: -94.82583, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Angelina", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=LRWT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.31, 
                twentyFifthPercentile: 10.78, 
                tenthPercentile: 9.78, 
                thirdPercentile: 9.00
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.85, 
                twentyFifthPercentile: 16.99, 
                tenthPercentile: 14.95, 
                thirdPercentile: 14.12
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.78, 
                twentyFifthPercentile: 17.78, 
                tenthPercentile: 16.55, 
                thirdPercentile: 15.73
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 69, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Sabine South", 
        stationId: "413701", 
        stationLatitude: 31.43867, 
        stationLongitute: -93.766, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Sabine", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=SSRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.10, 
                twentyFifthPercentile: 11.16, 
                tenthPercentile: 10.07, 
                thirdPercentile: 9.15
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.23, 
                twentyFifthPercentile: 16.15, 
                tenthPercentile: 14.90, 
                thirdPercentile: 14.08
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.08, 
                twentyFifthPercentile: 17.95, 
                tenthPercentile: 16.68, 
                thirdPercentile: 15.64
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 39, 
                twentyFifthPercentile: 53, 
                tenthPercentile: 68, 
                thirdPercentile: 81
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 39, 
                twentyFifthPercentile: 54, 
                tenthPercentile: 69, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Woodville", 
        stationId: "414402", 
        stationLatitude: 30.73694, 
        stationLongitute: -94.4325, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Tyler", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=WVLT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.23, 
                twentyFifthPercentile: 10.53, 
                tenthPercentile: 9.50, 
                thirdPercentile: 8.51
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.75, 
                twentyFifthPercentile: 15.94, 
                tenthPercentile: 14.82, 
                thirdPercentile: 13.98
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.71, 
                twentyFifthPercentile: 17.84, 
                tenthPercentile: 16.56, 
                thirdPercentile: 15.61
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 71, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Kirbyville", 
        stationId: "414501", 
        stationLatitude: 30.63306, 
        stationLongitute: -93.82861, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Newton", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KRBT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.47, 
                twentyFifthPercentile: 11.63, 
                tenthPercentile: 10.62, 
                thirdPercentile: 9.72
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.76, 
                twentyFifthPercentile: 16.86, 
                tenthPercentile: 15.69, 
                thirdPercentile: 14.87
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.67, 
                twentyFifthPercentile: 18.66, 
                tenthPercentile: 17.48, 
                thirdPercentile: 16.46
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 42, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 70, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 69, 
                thirdPercentile: 85
            } 
        ]
    }, 
    {
        stationName: "Dayton", 
        stationId: "415201", 
        stationLatitude: 30.105, 
        stationLongitute: -94.93139, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Liberty", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KNFT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.62, 
                twentyFifthPercentile: 11.02, 
                tenthPercentile: 10.12, 
                thirdPercentile: 9.29
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.92, 
                twentyFifthPercentile: 16.10, 
                tenthPercentile: 15.04, 
                thirdPercentile: 14.39
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.81, 
                twentyFifthPercentile: 17.98, 
                tenthPercentile: 16.75, 
                thirdPercentile: 16.12
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 71, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 72, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Southern Rough", 
        stationId: "416101", 
        stationLatitude: 30.54472, 
        stationLongitute: -94.34611, 
        predicitveServiceArea: "Southeast Texas", 
        stationCounty: "Tyler", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=WRRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.23, 
                twentyFifthPercentile: 11.56, 
                tenthPercentile: 10.53, 
                thirdPercentile: 9.92
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.74, 
                twentyFifthPercentile: 16.60, 
                tenthPercentile: 15.41, 
                thirdPercentile: 14.55
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.73, 
                twentyFifthPercentile: 18.48, 
                tenthPercentile: 17.14, 
                thirdPercentile: 16.33
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 69, 
                thirdPercentile: 83
            } 
        ]
    }, 
    {
        stationName: "Winkler Co. Apt.", 
        stationId: "417501", 
        stationLatitude: 31.77972, 
        stationLongitute: -103.201139, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Winkler", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KINK&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.65, 
                twentyFifthPercentile: 6.97, 
                tenthPercentile: 5.75, 
                thirdPercentile: 4.78
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 12.46, 
                twentyFifthPercentile: 10.5, 
                tenthPercentile: 9.09, 
                thirdPercentile: 7.91
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 13.75, 
                twentyFifthPercentile: 11.90, 
                tenthPercentile: 10.50, 
                thirdPercentile: 9.01
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 80, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Gail", 
        stationId: "419101", 
        stationLatitude: 32.769, 
        stationLongitute: -101.43439, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Borden", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=FRKT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.43, 
                twentyFifthPercentile: 7.67, 
                tenthPercentile: 6.33, 
                thirdPercentile: 5.26
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.89, 
                twentyFifthPercentile: 11.68, 
                tenthPercentile: 10.10, 
                thirdPercentile: 8.58
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.18, 
                twentyFifthPercentile: 13.28, 
                tenthPercentile: 11.69, 
                thirdPercentile: 9.85
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 77, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Gail WTM", 
        stationId: "419101", 
        stationLatitude: 32.755, 
        stationLongitute: -101.414, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Borden", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.46, 
                twentyFifthPercentile: 7.68, 
                tenthPercentile: 6.28, 
                thirdPercentile: 5.28
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.90, 
                twentyFifthPercentile: 11.71, 
                tenthPercentile: 10.07, 
                thirdPercentile: 8.55
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.19, 
                twentyFifthPercentile: 13.28, 
                tenthPercentile: 11.67, 
                thirdPercentile: 9.77
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 77, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Seminole", 
        stationId: "419202", 
        stationLatitude: 32.741, 
        stationLongitute: -102.636, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Gaines", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.19, 
                twentyFifthPercentile: 7.49, 
                tenthPercentile: 6.21, 
                thirdPercentile: 5.12
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.34, 
                twentyFifthPercentile: 11.37, 
                tenthPercentile: 10.01, 
                thirdPercentile: 8.55
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.72, 
                twentyFifthPercentile: 12.97, 
                tenthPercentile: 11.48, 
                thirdPercentile: 9.96
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 55, 
                twentyFifthPercentile: 68, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Midland", 
        stationId: "419202", 
        stationLatitude: 31.94306, 
        stationLongitute: -102.18972, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Midland", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=MNDT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.85, 
                twentyFifthPercentile: 7.06, 
                tenthPercentile: 5.87, 
                thirdPercentile: 4.92
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.31, 
                twentyFifthPercentile: 11.12, 
                tenthPercentile: 9.60, 
                thirdPercentile: 8.15
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.72, 
                twentyFifthPercentile: 12.97, 
                tenthPercentile: 11.48, 
                thirdPercentile: 9.96
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 71, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 76, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "St. Lawrence", 
        stationId: "419205", 
        stationLatitude: 31.656, 
        stationLongitute: -101.601, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Glasscock", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.42, 
                twentyFifthPercentile: 7.65, 
                tenthPercentile: 6.43, 
                thirdPercentile: 5.48
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.23, 
                twentyFifthPercentile: 11.93, 
                tenthPercentile: 10.28, 
                thirdPercentile: 8.81
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 15.66, 
                twentyFifthPercentile: 13.60, 
                tenthPercentile: 12.00, 
                thirdPercentile: 10.12
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 76, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Midland ASOS", 
        stationId: "419207", 
        stationLatitude: 31.94778, 
        stationLongitute: -102.20861, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Midland", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KMAF&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.33, 
                twentyFifthPercentile: 7.50, 
                tenthPercentile: 6.29, 
                thirdPercentile: 5.26
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 13.51, 
                twentyFifthPercentile: 11.39, 
                tenthPercentile: 9.88, 
                thirdPercentile: 8.53
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 14.80, 
                twentyFifthPercentile: 12.88, 
                tenthPercentile: 11.38, 
                thirdPercentile: 9.68
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 53, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Big Lake", 
        stationId: "419208", 
        stationLatitude: 31.193, 
        stationLongitute: -101.469, 
        predicitveServiceArea: "Southern Plains", 
        stationCounty: "Reagan", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.76, 
                twentyFifthPercentile: 8.05, 
                tenthPercentile: 6.81, 
                thirdPercentile: 5.81
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.75, 
                twentyFifthPercentile: 12.69, 
                tenthPercentile: 10.85, 
                thirdPercentile: 9.45
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.29, 
                twentyFifthPercentile: 14.30, 
                tenthPercentile: 12.47, 
                thirdPercentile: 10.70
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 76, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "El Paso Int. Apt.", 
        stationId: "416901", 
        stationLatitude: 31.81111, 
        stationLongitute: -106.37583, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "El Paso", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KELP&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 7.27, 
                twentyFifthPercentile: 5.55, 
                tenthPercentile: 4.33, 
                thirdPercentile: 3.43
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 9.88, 
                twentyFifthPercentile: 7.93, 
                tenthPercentile: 6.46, 
                thirdPercentile: 5.41
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 10.83, 
                twentyFifthPercentile: 8.98, 
                tenthPercentile: 7.38, 
                thirdPercentile: 6.33
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 69, 
                tenthPercentile: 80, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Dell City", 
        stationId: "417001", 
        stationLatitude: 31.947, 
        stationLongitute: -105.200, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Hudspeth", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 7.80, 
                twentyFifthPercentile: 6.26, 
                tenthPercentile: 5.10, 
                thirdPercentile: 4.17
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 10.82, 
                twentyFifthPercentile: 9.18, 
                tenthPercentile: 7.92, 
                thirdPercentile: 6.76
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.06, 
                twentyFifthPercentile: 10.43, 
                tenthPercentile: 9.32, 
                thirdPercentile: 8.18
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 60, 
                twentyFifthPercentile: 72, 
                tenthPercentile: 82, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Pinery", 
        stationId: "417101", 
        stationLatitude: 31.89444, 
        stationLongitute: -104.79778, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Culberson", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=PSGT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 7.68, 
                twentyFifthPercentile: 6.25, 
                tenthPercentile: 5.05, 
                thirdPercentile: 4.02
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 10.74, 
                twentyFifthPercentile: 9.19, 
                tenthPercentile: 7.93, 
                thirdPercentile: 6.64
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 11.96, 
                twentyFifthPercentile: 10.42, 
                tenthPercentile: 9.23, 
                thirdPercentile: 8.21
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 59, 
                twentyFifthPercentile: 72, 
                tenthPercentile: 82, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "The Bowl", 
        stationId: "417103", 
        stationLatitude: 31.925, 
        stationLongitute: -104.82528, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Culberson", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=GDBT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.91, 
                twentyFifthPercentile: 7.41, 
                tenthPercentile: 6.25, 
                thirdPercentile: 5.06
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.88, 
                twentyFifthPercentile: 10.26, 
                tenthPercentile: 8.89, 
                thirdPercentile: 7.73
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 13.22, 
                twentyFifthPercentile: 11.64, 
                tenthPercentile: 10.35, 
                thirdPercentile: 9.03
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 58, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "PX Well", 
        stationId: "417105", 
        stationLatitude: 31.97236, 
        stationLongitute: -104.94971, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Hudspeth", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=PXWT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.07, 
                twentyFifthPercentile: 6.64, 
                tenthPercentile: 5.47, 
                thirdPercentile: 4.41
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.05, 
                twentyFifthPercentile: 9.43, 
                tenthPercentile: 8.21, 
                thirdPercentile: 7.14
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.27, 
                twentyFifthPercentile: 10.70, 
                tenthPercentile: 9.54, 
                thirdPercentile: 8.53
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 60, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 80, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Van Horn", 
        stationId: "417106", 
        stationLatitude: 31.059, 
        stationLongitute: -104.791, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Culberson", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.06, 
                twentyFifthPercentile: 6.47, 
                tenthPercentile: 5.31, 
                thirdPercentile: 4.41
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.32, 
                twentyFifthPercentile: 9.58, 
                tenthPercentile: 8.29, 
                thirdPercentile: 7.27
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.58, 
                twentyFifthPercentile: 10.87, 
                tenthPercentile: 9.66, 
                thirdPercentile: 8.61
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 61, 
                twentyFifthPercentile: 72, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Fort Davis", 
        stationId: "417201", 
        stationLatitude: 30.60056, 
        stationLongitute: -104.88667, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Jeff Davis", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=FDST2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.33, 
                twentyFifthPercentile: 6.81, 
                tenthPercentile: 5.65, 
                thirdPercentile: 4.66
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.90, 
                twentyFifthPercentile: 10.07, 
                tenthPercentile: 8.76, 
                thirdPercentile: 7.70
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 13.30, 
                twentyFifthPercentile: 11.45, 
                tenthPercentile: 10.33, 
                thirdPercentile: 9.17
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 59, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Wolf Den DMP", 
        stationId: "417202", 
        stationLatitude: 30.64608, 
        stationLongitute: -104.13661, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Jeff Davis", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=WDPT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.41, 
                twentyFifthPercentile: 6.88, 
                tenthPercentile: 5.72, 
                thirdPercentile: 4.73
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.94, 
                twentyFifthPercentile: 10.12, 
                tenthPercentile: 8.80, 
                thirdPercentile: 7.76
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 13.36, 
                twentyFifthPercentile: 11.47, 
                tenthPercentile: 10.38, 
                thirdPercentile: 9.25
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 80, 
                thirdPercentile: 88
            } 
        ]
    }, 
    {
        stationName: "Panther Junction", 
        stationId: "417401", 
        stationLatitude: 29.3275, 
        stationLongitute: -103.2075, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Brewster", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=PJNT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 7.31, 
                twentyFifthPercentile: 5.93, 
                tenthPercentile: 4.92, 
                thirdPercentile: 4.11
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 10.78, 
                twentyFifthPercentile: 9.06, 
                tenthPercentile: 7.91, 
                thirdPercentile: 6.91
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.15, 
                twentyFifthPercentile: 10.49, 
                tenthPercentile: 9.25, 
                thirdPercentile: 8.25
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 58, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Chisos", 
        stationId: "417403", 
        stationLatitude: 29.27083, 
        stationLongitute: -103.30139, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Brewster", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CSBT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 7.80, 
                twentyFifthPercentile: 6.47, 
                tenthPercentile: 5.45, 
                thirdPercentile: 4.55
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.03, 
                twentyFifthPercentile: 9.48, 
                tenthPercentile: 8.24, 
                thirdPercentile: 7.34
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.22, 
                twentyFifthPercentile: 10.73, 
                tenthPercentile: 9.60, 
                thirdPercentile: 8.64
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 52, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 75, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 58, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Elephant Mtn. WMA", 
        stationId: "417404", 
        stationLatitude: 30.0305, 
        stationLongitute: -103.47319, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Brewster", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=EMNT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 7.64, 
                twentyFifthPercentile: 6.25, 
                tenthPercentile: 5.16, 
                thirdPercentile: 4.24
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.36, 
                twentyFifthPercentile: 9.53, 
                tenthPercentile: 8.25, 
                thirdPercentile: 7.19
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 12.74, 
                twentyFifthPercentile: 11.00, 
                tenthPercentile: 9.73, 
                thirdPercentile: 8.55
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 71, 
                tenthPercentile: 81, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Kent", 
        stationId: "417502", 
        stationLatitude: 31.089, 
        stationLongitute: -104.005, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Reeves", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.25, 
                twentyFifthPercentile: 6.70, 
                tenthPercentile: 5.52, 
                thirdPercentile: 4.55
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 11.74, 
                twentyFifthPercentile: 9.91, 
                tenthPercentile: 8.60, 
                thirdPercentile: 7.56
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 13.13, 
                twentyFifthPercentile: 11.29, 
                tenthPercentile: 10.07, 
                thirdPercentile: 8.91
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 59, 
                twentyFifthPercentile: 72, 
                tenthPercentile: 81, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Pecos Co. Apt.", 
        stationId: "417601", 
        stationLatitude: 30.91194, 
        stationLongitute: -102.91667, 
        predicitveServiceArea: "Trans Pecos", 
        stationCounty: "Pecos", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KFST&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 8.49, 
                twentyFifthPercentile: 6.99, 
                tenthPercentile: 5.86, 
                thirdPercentile: 4.86
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 12.54, 
                twentyFifthPercentile: 10.62, 
                tenthPercentile: 9.31, 
                thirdPercentile: 8.18
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 13.87, 
                twentyFifthPercentile: 12.10, 
                tenthPercentile: 10.84, 
                thirdPercentile: 9.69
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 73, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 57, 
                twentyFifthPercentile: 70, 
                tenthPercentile: 80, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Anahuac NWR", 
        stationId: "416099", 
        stationLatitude: 29.66892, 
        stationLongitute: -94.43847, 
        predicitveServiceArea: "Upper Gulf Coast", 
        stationCounty: "Chambers", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=HILT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.54, 
                twentyFifthPercentile: 11.90, 
                tenthPercentile: 10.88, 
                thirdPercentile: 10.07
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.43, 
                twentyFifthPercentile: 16.57, 
                tenthPercentile: 15.40, 
                thirdPercentile: 14.79
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.35, 
                twentyFifthPercentile: 18.52, 
                tenthPercentile: 17.29, 
                thirdPercentile: 16.62
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 70, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 68, 
                thirdPercentile: 80
            } 
        ]
    }, 
    {
        stationName: "Brazoria", 
        stationId: "418301", 
        stationLatitude: 29.14531, 
        stationLongitute: -95.29186, 
        predicitveServiceArea: "Upper Gulf Coast", 
        stationCounty: "Brazoria", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BZRT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.32, 
                twentyFifthPercentile: 11.59, 
                tenthPercentile: 10.50, 
                thirdPercentile: 9.65
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.19, 
                twentyFifthPercentile: 16.21, 
                tenthPercentile: 15.00, 
                thirdPercentile: 14.17
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.17, 
                twentyFifthPercentile: 18.16, 
                tenthPercentile: 16.85, 
                thirdPercentile: 15.94
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 45, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 69, 
                thirdPercentile: 82
            } 
        ]
    }, 
    {
        stationName: "San Bernard", 
        stationId: "418302", 
        stationLatitude: 28.91533, 
        stationLongitute: -95.57561, 
        predicitveServiceArea: "Upper Gulf Coast", 
        stationCounty: "Brazoria", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=SRDT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.78, 
                twentyFifthPercentile: 12.00, 
                tenthPercentile: 10.97, 
                thirdPercentile: 10.09
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.28, 
                twentyFifthPercentile: 16.51, 
                tenthPercentile: 15.38, 
                thirdPercentile: 14.73
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.24, 
                twentyFifthPercentile: 18.36, 
                tenthPercentile: 17.16, 
                thirdPercentile: 16.52
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 59, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 54, 
                tenthPercentile: 69, 
                thirdPercentile: 82
            } 
        ]
    }, 
    {
        stationName: "McFaddin NWR", 
        stationId: "419901", 
        stationLatitude: 29.70722, 
        stationLongitute: -94.12111, 
        predicitveServiceArea: "Upper Gulf Coast", 
        stationCounty: "Jefferson", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=FADT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 13.21, 
                twentyFifthPercentile: 11.72, 
                tenthPercentile: 10.83, 
                thirdPercentile: 10.06
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.40, 
                twentyFifthPercentile: 16.57, 
                tenthPercentile: 15.48, 
                thirdPercentile: 14.76
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.25, 
                twentyFifthPercentile: 18.44, 
                tenthPercentile: 17.35, 
                thirdPercentile: 16.64
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 44, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 69, 
                thirdPercentile: 81
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 53, 
                tenthPercentile: 65, 
                thirdPercentile: 77
            } 
        ]
    }, 
    {
        stationName: "Barnhart", 
        stationId: "417701", 
        stationLatitude: 30.98556, 
        stationLongitute: -101.15778, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Crockett", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=BNHT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.84, 
                twentyFifthPercentile: 8.20, 
                tenthPercentile: 6.90, 
                thirdPercentile: 5.84
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.89, 
                twentyFifthPercentile: 12.88, 
                tenthPercentile: 11.19, 
                thirdPercentile: 9.68
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.46, 
                twentyFifthPercentile: 14.51, 
                tenthPercentile: 12.97, 
                thirdPercentile: 11.11
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 76, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Fort Lancaster", 
        stationId: "417702", 
        stationLatitude: 30.663, 
        stationLongitute: -101.691, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Crockett", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.78, 
                twentyFifthPercentile: 8.10, 
                tenthPercentile: 6.83, 
                thirdPercentile: 5.80
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.77, 
                twentyFifthPercentile: 12.70, 
                tenthPercentile: 11.02, 
                thirdPercentile: 9.55
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.35, 
                twentyFifthPercentile: 14.37, 
                tenthPercentile: 12.76, 
                thirdPercentile: 10.92
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 76, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Kimble Co. Apt.", 
        stationId: "417803", 
        stationLatitude: 30.51083, 
        stationLongitute: -99.76639, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Kimble", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KJCT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.87, 
                twentyFifthPercentile: 9.22, 
                tenthPercentile: 7.92, 
                thirdPercentile: 6.84
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.91, 
                twentyFifthPercentile: 14.08, 
                tenthPercentile: 12.47, 
                thirdPercentile: 11.14
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.19, 
                twentyFifthPercentile: 15.54, 
                tenthPercentile: 14.16, 
                thirdPercentile: 12.83
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 48, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 51, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 78, 
                thirdPercentile: 91
            } 
        ]
    }, 
    {
        stationName: "Menard", 
        stationId: "417804", 
        stationLatitude: 30.929, 
        stationLongitute: -99.810, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Menard", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.46, 
                twentyFifthPercentile: 8.95, 
                tenthPercentile: 7.64, 
                thirdPercentile: 6.41
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.80, 
                twentyFifthPercentile: 14.08, 
                tenthPercentile: 12.46, 
                thirdPercentile: 10.88
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.36, 
                twentyFifthPercentile: 15.80, 
                tenthPercentile: 14.17, 
                thirdPercentile: 12.34
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 76, 
                thirdPercentile: 88
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Fort McKavett", 
        stationId: "417805", 
        stationLatitude: 30.824, 
        stationLongitute: -100.109, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Menard", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.20, 
                twentyFifthPercentile: 8.61, 
                tenthPercentile: 7.36, 
                thirdPercentile: 6.24
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.40, 
                twentyFifthPercentile: 13.58, 
                tenthPercentile: 11.95, 
                thirdPercentile: 10.36
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.94, 
                twentyFifthPercentile: 15.28, 
                tenthPercentile: 13.60, 
                thirdPercentile: 11.89
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Merrill", 
        stationId: "418002", 
        stationLatitude: 30.280, 
        stationLongitute: -100.56083, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Edwards", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=EDWT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.43, 
                twentyFifthPercentile: 8.75, 
                tenthPercentile: 7.52, 
                thirdPercentile: 6.47
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.82, 
                twentyFifthPercentile: 13.89, 
                tenthPercentile: 12.35, 
                thirdPercentile: 10.95
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 17.55, 
                twentyFifthPercentile: 15.54, 
                tenthPercentile: 14.04, 
                thirdPercentile: 12.66
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 75, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 64, 
                tenthPercentile: 77, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Del Rio Int. Apt.", 
        stationId: "418003", 
        stationLatitude: 29.37472, 
        stationLongitute: -100.92361, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Val Verde", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KDRT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.46, 
                twentyFifthPercentile: 8.50, 
                tenthPercentile: 7.28, 
                thirdPercentile: 6.35
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 15.46, 
                twentyFifthPercentile: 13.18, 
                tenthPercentile: 11.47, 
                thirdPercentile: 10.12
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.78, 
                twentyFifthPercentile: 14.62, 
                tenthPercentile: 13.00, 
                thirdPercentile: 11.57
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 61, 
                tenthPercentile: 74, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 65, 
                tenthPercentile: 79, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Mathis Field", 
        stationId: "419204", 
        stationLatitude: 31.35139, 
        stationLongitute: -100.49389, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Tom Green", 
        stationNetwork: "ASOS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=KSJT&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 10.21, 
                twentyFifthPercentile: 8.38, 
                tenthPercentile: 7.02, 
                thirdPercentile: 5.98
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.87, 
                twentyFifthPercentile: 12.76, 
                tenthPercentile: 11.04, 
                thirdPercentile: 9.45
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.13, 
                twentyFifthPercentile: 14.18, 
                tenthPercentile: 12.58, 
                thirdPercentile: 10.55
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 47, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 74, 
                thirdPercentile: 86
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 50, 
                twentyFifthPercentile: 63, 
                tenthPercentile: 75, 
                thirdPercentile: 92
            } 
        ]
    }, 
    {
        stationName: "Mertzon", 
        stationId: "419209", 
        stationLatitude: 31.299, 
        stationLongitute: -100.805, 
        predicitveServiceArea: "Western Hill Country", 
        stationCounty: "Irion", 
        stationNetwork: "WTM", 
        stationUrl: "https://www.mesonet.ttu.edu/", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 9.71, 
                twentyFifthPercentile: 8.03, 
                tenthPercentile: 6.69, 
                thirdPercentile: 5.60
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 14.56, 
                twentyFifthPercentile: 12.47, 
                tenthPercentile: 10.72, 
                thirdPercentile: 9.16
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 16.05, 
                twentyFifthPercentile: 14.11, 
                tenthPercentile: 12.45, 
                thirdPercentile: 10.50
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 46, 
                twentyFifthPercentile: 60, 
                tenthPercentile: 73, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 49, 
                twentyFifthPercentile: 62, 
                tenthPercentile: 73, 
                thirdPercentile: 89
            } 
        ]
    }, 
    {
        stationName: "Palestine", 
        stationId: "412601", 
        stationLatitude: 31.7425, 
        stationLongitute: -95.57167, 
        predicitveServiceArea: "Western Pineywoods", 
        stationCounty: "Anderson", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=APLT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.11, 
                twentyFifthPercentile: 10.63, 
                tenthPercentile: 9.54, 
                thirdPercentile: 8.50
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 17.68, 
                twentyFifthPercentile: 15.94, 
                tenthPercentile: 14.95, 
                thirdPercentile: 13.92
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.74, 
                twentyFifthPercentile: 17.74, 
                tenthPercentile: 16.60, 
                thirdPercentile: 15.35
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 72, 
                thirdPercentile: 84
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Ratcliff", 
        stationId: "413302", 
        stationLatitude: 31.39511, 
        stationLongitute: -95.13858, 
        predicitveServiceArea: "Western Pineywoods", 
        stationCounty: "Houston", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=RTCT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.00, 
                twentyFifthPercentile: 10.96, 
                tenthPercentile: 9.68, 
                thirdPercentile: 8.52
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.71, 
                twentyFifthPercentile: 16.38, 
                tenthPercentile: 15.00, 
                thirdPercentile: 13.83
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.42, 
                twentyFifthPercentile: 18.34, 
                tenthPercentile: 16.73, 
                thirdPercentile: 15.34
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 40, 
                twentyFifthPercentile: 55, 
                tenthPercentile: 70, 
                thirdPercentile: 83
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 38, 
                twentyFifthPercentile: 54, 
                tenthPercentile: 69, 
                thirdPercentile: 87
            } 
        ]
    }, 
    {
        stationName: "Huntsville", 
        stationId: "414102", 
        stationLatitude: 30.73556, 
        stationLongitute: -95.63611, 
        predicitveServiceArea: "Western Pineywoods", 
        stationCounty: "Walker", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=HTVT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.59, 
                twentyFifthPercentile: 10.91, 
                tenthPercentile: 9.68, 
                thirdPercentile: 8.52
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.12, 
                twentyFifthPercentile: 16.18, 
                tenthPercentile: 15.07, 
                thirdPercentile: 14.18
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 19.96, 
                twentyFifthPercentile: 17.98, 
                tenthPercentile: 16.75, 
                thirdPercentile: 15.62
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 58, 
                tenthPercentile: 72, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 74, 
                thirdPercentile: 90
            } 
        ]
    }, 
    {
        stationName: "Coldsprings", 
        stationId: "414201", 
        stationLatitude: 30.51817, 
        stationLongitute: -95.14475, 
        predicitveServiceArea: "Western Pineywoods", 
        stationCounty: "San Jacinto", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CPGT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 14.06, 
                twentyFifthPercentile: 11.85, 
                tenthPercentile: 10.58, 
                thirdPercentile: 9.60
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 19.55, 
                twentyFifthPercentile: 17.24, 
                tenthPercentile: 15.79, 
                thirdPercentile: 14.91
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 21.15, 
                twentyFifthPercentile: 19.14, 
                tenthPercentile: 17.48, 
                thirdPercentile: 16.41
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 57, 
                tenthPercentile: 72, 
                thirdPercentile: 87
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 37, 
                twentyFifthPercentile: 52, 
                tenthPercentile: 67, 
                thirdPercentile: 86
            } 
        ]
    }, 
    {
        stationName: "Conroe", 
        stationId: "415109", 
        stationLatitude: 30.2362, 
        stationLongitute: -95.48305, 
        predicitveServiceArea: "Western Pineywoods", 
        stationCounty: "Montgomery", 
        stationNetwork: "RAWS", 
        stationUrl: "https://mesowest.utah.edu/cgi-bin/droman/meso_base_dyn.cgi?stn=CKNT2&unit=0&timetype=LOCAL", 
        fireDangerIndices: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 12.93, 
                twentyFifthPercentile: 11.36, 
                tenthPercentile: 10.33, 
                thirdPercentile: 9.40
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 18.50, 
                twentyFifthPercentile: 16.76, 
                tenthPercentile: 15.77, 
                thirdPercentile: 14.80
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 20.36, 
                twentyFifthPercentile: 18.54, 
                tenthPercentile: 17.37, 
                thirdPercentile: 16.35
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 43, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 70, 
                thirdPercentile: 85
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 41, 
                twentyFifthPercentile: 56, 
                tenthPercentile: 71, 
                thirdPercentile: 87
            } 
        ]
    }
];


