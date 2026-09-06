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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        PSAcounties: ["Bell", "Blanco", "Burnet", "Comal", "Coryell", "Gillespie", "Hays", "Kendall", "Kerr", "Lampasas", "Llano", "Mason", "McCulloch", "Mills", "Real", "San Saba", "Travis", "Williamson"], 
        seasonalErcUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_erc_pdfs/EASTERN_HILL_COUNTRY_erc.pdf", 
        seasonalHunHrUrl: "https://twcgis.tamu.edu/NFDRSv4/Graphs/combined_fm100_pdfs/EASTERN_HILL_COUNTRY_fm100.pdf", 
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
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
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0, 
                twentyFifthPercentile: 0, 
                tenthPercentile: 0, 
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "Dozier", 
        stationId: "", 
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
    {
        stationName: "",
        stationId: "",
        stationLatitude: 0, 
        stationLongitute: 0, 
        predicitveServiceArea: "", 
        stationNetwork: "", 
        stationUrl: "", 
        fireDangerIndeces: [
            {
                name: "10hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "100hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "1000hr FM", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "BI", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            }, 
            {
                name: "ERC", 
                fiftiethPercentile: 0,
                twentyFifthPercentile: 0,
                tenthPercentile: 0,
                thirdPercentile: 0,
            } 
        ]
    }, 
];


