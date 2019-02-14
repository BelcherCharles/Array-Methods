// ONE
// Copy and paste the following data into your JS file:
const businesses = [
    {
        purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
        phoneWork: "089.129.2290 x9400",
        orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
        companyName: "Care-media",
        companyIndustry: "Education",
        addressZipCode: "56839",
        addressStateCode: "WI",
        addressFullStreet: "8417 Franklin Court Tunnel",
        addressCity: "Mouthcard"
    },
    {
        purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
        phoneWork: "(833) 222-7579 x5874",
        orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
        companyName: "Stanholding",
        companyIndustry: "Hospitality",
        addressZipCode: "09705",
        addressStateCode: "NY",
        addressFullStreet: "2889 Fawn Court Garden",
        addressCity: "Fellsmere"
    },
    {
        purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
        phoneWork: "235.266.6278",
        orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
        companyName: "Highnix",
        companyIndustry: "Agriculture",
        addressZipCode: "49376",
        addressStateCode: "ME",
        addressFullStreet: "5734 Maple Avenue Throughway",
        addressCity: "Little Genesee"
    },
    {
        purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
        phoneWork: "1-449-987-3083 x23263",
        orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
        companyName: "Conit",
        companyIndustry: "Defense",
        addressZipCode: "53326",
        addressStateCode: "IL",
        addressFullStreet: "5755 Hillside Drive Crossroad",
        addressCity: "Norval"
    },
    {
        purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
        phoneWork: "1-730-411-8580",
        orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
        companyName: "Dong-tom",
        companyIndustry: "Energy",
        addressZipCode: "67071",
        addressStateCode: "KS",
        addressFullStreet: "4826 Arch Street Lights",
        addressCity: "Newburyport"
    },
    {
        purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
        phoneWork: "(868) 043-0950",
        orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
        companyName: "Dan-dox",
        companyIndustry: "Manufacturing",
        addressZipCode: "98842",
        addressStateCode: "WV",
        addressFullStreet: "9767 Cedar Court Corner",
        addressCity: "Prince George"
    },
    {
        purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
        phoneWork: "(298) 305-1942 x53653",
        orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
        companyName: "J-base",
        companyIndustry: "Health care",
        addressZipCode: "72993",
        addressStateCode: "FL",
        addressFullStreet: "9954 Buckingham Drive Mountains",
        addressCity: "Vesper"
    },
    {
        purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
        phoneWork: "(743) 934-8981 x692",
        orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
        companyName: "Span-fix",
        companyIndustry: "Construction",
        addressZipCode: "59860",
        addressStateCode: "MT",
        addressFullStreet: "4151 Orange Street Extension",
        addressCity: "Little Rock Air Force Base"
    },
    {
        purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
        phoneWork: "727.635.6610 x6483",
        orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
        companyName: "Sanaplane",
        companyIndustry: "Information",
        addressZipCode: "85156",
        addressStateCode: "NY",
        addressFullStreet: "4765 Fairview Avenue Locks",
        addressCity: "Dennisville"
    },
    {
        purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
        phoneWork: "(992) 079-1670 x71569",
        orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
        companyName: "Ran-taxon",
        companyIndustry: "Manufacturing",
        addressZipCode: "96673",
        addressStateCode: "MD",
        addressFullStreet: "7157 Hudson Street Ford",
        addressCity: "Watrous"
    }
];

// ONE: Loop through all of the customer objects using a .forEach loop. Inside that .forEach loop, write another .forEach loop through each customer's order array. Print the price of each order to the console.

businesses.forEach(business => {
    business.orders.forEach(order => {
        console.log(order)
    })
})



// TWO: Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry.Display those to the DOM.

const manuBusinesses = businesses.filter(business => {
    return business.companyIndustry === "Manufacturing"
})
console.log(manuBusinesses)
manuBusinesses.forEach(business => {
    document.querySelector("#business-container").innerHTML += `<div><h3>${business.companyName}</h3><h4>${business.companyIndustry}</h4></div>`
})

// THREE: Use .map to return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

const businessData = businesses.map(currentBusiness => {
    return {
        "fullName": `${currentBusiness.purchasingAgent.nameFirst} ${currentBusiness.purchasingAgent.nameLast}`,
        "company": currentBusiness.companyName,
        "phoneNumber": currentBusiness.phoneWork
    }
})

console.log(businessData)
// {
//   "fullName": "Kaylee Gutkowski",
//     "company": "Highnix",
//       "phoneNumber": "235.266.6278"
// }

//   Use the filter method to get all the big spenders in the main array into a new one.

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    let totalOrders = (business.orders.reduce((runningTotal, currentAmount) =>
        runningTotal += currentAmount, 0
    ))
    if (totalOrders >= 40000) {
        return totalOrders
    } else {
    }
})
console.log(bigSpenders)

//   // Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce((runningTotal, currentAmount) => {
//     return runningTotal += currentAmount
// })
// console.log(totalRainfall)

// // console.log(totalRainfall)
// // Lightning Exercise 2: Use the reduce method on the following array to build a sentence.

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce((newSentence, currentWord) => {
//         return newSentence += ` ${currentWord}`
// })

// console.log(sentence)

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(currentPlanet => {
    document.querySelector("#planets-container").innerHTML += `<section>${currentPlanet}<section>`
})
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const Planets = planets.map(currentPlanet => {
    return currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1)
})

console.log(Planets)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const ePlanets = planets.filter(currentPlanet => {
    return currentPlanet.includes("e")
})

console.log(ePlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/



// Spam Spam Spam!!!
let customers = [
    {
        "location": {
            "street": "Old York Road",
            "state": "Delaware",
            "country": "Qatar",
            "city": "Irma"
        },
        "last_name": "Herzog",
        "job": {
            "position": "Senior Intranet Assistant",
            "phone_number": "1-035-577-1574",
            "department": "sales",
            "company": "Ganjazamlux"
        },
        "first_name": "Johnson",
        "contacts": {
            "mobile": "102.596.5226",
            "email": [
                "rerum@outlook.com",
                "possimus_abraham@hotmail.com",
                "yoshiko@gmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Maple Street",
            "state": "Wyoming",
            "country": "Uzbekistan",
            "city": "Ortonville"
        },
        "last_name": "Stehr",
        "job": {
            "position": "Dynamic Quality Administrator",
            "phone_number": "555.173.9685",
            "department": "customer service support",
            "company": "Hating"
        },
        "first_name": "Rogelio",
        "contacts": {
            "mobile": "1-746-406-3132",
            "email": [
                "saw_savannah@yahoo.com",
                "this46@outlook.com",
                "quidem_shayna@hotmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Cleveland Avenue",
            "state": "South Carolina",
            "country": "Lebanon",
            "city": "New Salem"
        },
        "last_name": "McDermott",
        "job": {
            "position": "Human Research Architect",
            "phone_number": "1-120-949-9685",
            "department": "accounting",
            "company": "Keyzazim"
        },
        "first_name": "Herbert",
        "contacts": {
            "mobile": "705.404.8808",
            "email": [
                "him_joshuah@yahoo.com",
                "neha@outlook.com",
                "tail@gmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Route 30",
            "state": "Pennsylvania",
            "country": "Nauru",
            "city": "Brocton"
        },
        "last_name": "Buckridge",
        "job": {
            "position": "National Usability Technician",
            "phone_number": "215.951.1943",
            "department": "research and development",
            "company": "Dongsolofind"
        },
        "first_name": "Keagan",
        "contacts": {
            "mobile": "665.835.9595",
            "email": [
                "trade_hunter@yahoo.com",
                "ut@hotmail.com",
                "throw@gmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Arch Street",
            "state": "Illinois",
            "country": "Guam",
            "city": "Stroud"
        },
        "last_name": "Barton",
        "job": {
            "position": "Dynamic Directives Analyst",
            "phone_number": "1-069-596-0831 x15766",
            "department": "operations",
            "company": "Zoomruntam"
        },
        "first_name": "Kenton",
        "contacts": {
            "mobile": "(972) 219-3017",
            "email": [
                "alberto@outlook.com",
                "june@gmail.com",
                "rafaela@hotmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Race Street",
            "state": "Nebraska",
            "country": "Republic of Saudi Arabia",
            "city": "Guelph"
        },
        "last_name": "Mitchell",
        "job": {
            "position": "Principal Implementation Specialist",
            "phone_number": "713-818-2034 x23626",
            "department": "IT support",
            "company": "Hot-tom"
        },
        "first_name": "Hattie",
        "contacts": {
            "mobile": "(144) 533-6049",
            "email": [
                "river32@yahoo.com",
                "class65@gmail.com",
                "scale_oda@outlook.com"
            ]
        }
    },
    {
        "location": {
            "street": "Prospect Avenue",
            "state": "Massachusetts",
            "country": "Fiji",
            "city": "Hachita"
        },
        "last_name": "Rohan",
        "job": {
            "position": "Customer Identity Producer",
            "phone_number": "110-592-6773 x3160",
            "department": "production",
            "company": "Zapware"
        },
        "first_name": "Clotilde",
        "contacts": {
            "mobile": "005.981.1039",
            "email": [
                "winter@outlook.com",
                "kyla@gmail.com",
                "boy@yahoo.com"
            ]
        }
    },
    {
        "location": {
            "street": "Lexington Court",
            "state": "Georgia",
            "country": "Tokelau",
            "city": "Blackwater"
        },
        "last_name": "Kuphal",
        "job": {
            "position": "Direct Division Executive",
            "phone_number": "(763) 900-2576 x943",
            "department": "operations",
            "company": "Inchdonin"
        },
        "first_name": "Marcelle",
        "contacts": {
            "mobile": "1-511-518-7079",
            "email": [
                "try@outlook.com",
                "part73@yahoo.com",
                "mother5@hotmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Cobblestone Court",
            "state": "Minnesota",
            "country": "Saint Helena, Ascension and Tristan da Cunha",
            "city": "North Stonington"
        },
        "last_name": "Thompson",
        "job": {
            "position": "Product Response Facilitator",
            "phone_number": "(948) 430-6348 x4290",
            "department": "communication",
            "company": "Goldcare"
        },
        "first_name": "Briana",
        "contacts": {
            "mobile": "714-922-9557",
            "email": [
                "randi@outlook.com",
                "christian@yahoo.com",
                "tempore_gilda@hotmail.com"
            ]
        }
    },
    {
        "location": {
            "street": "Mill Street",
            "state": "Kentucky",
            "country": "Ireland",
            "city": "Crystal"
        },
        "last_name": "Weimann",
        "job": {
            "position": "Future Web Representative",
            "phone_number": "693-204-7849 x4251",
            "department": "legal",
            "company": "K-touch"
        },
        "first_name": "Brittany",
        "contacts": {
            "mobile": "1-327-084-4643",
            "email": [
                "she@hotmail.com",
                "quam3@gmail.com",
                "recusandae23@outlook.com"
            ]
        }
    }
];

//   From that array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one.

customers.forEach(currentCustomer => {
    ;
    const emailAddresses = currentCustomer.contacts.email.map(currentEmail => {
        document.querySelector("#email-container").innerHTML += `${currentEmail}<br>`
        return currentEmail
    })

    console.log(emailAddresses)
})

//   businesses.forEach(business => {
//     business.orders.forEach(order => {
//         console.log(order)})})


// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
let result = integers.sort(function (a, b) { return b - a }).filter(integers => { return integers < 19 }).map(integers => integers * 1.5 - 1);

// .reduce(runningTotal, currentValue => runningTotal =+ currentValue)
// result.filter(integers.value < 19);
console.log(result)









    // / ----SET ONE--//
// Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate.

// Copy the code below and paste it above your object.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName: "MSMA",
    streetAddress: "Kenton Way",
    doctorName: "Dr. Young",
    patientName: "Charles Belcher",
    visitDate: "12/01/2018",
    amountBilled: "$140.00",
    dueDate: "1/31/2019"
}

// Use square bracket notation to output the value of those three properties to the console in Chrome.

        console.log(doctorBill[dateVisited])
        console.log(doctorBill[owed])
        console.log(doctorBill[patient])

// Use Object.values() to output all the property values to the console in Chrome.

        console.log(Object.values(doctorBill))

// ---- SET TWO ----//
// Use Object.keys() to output all of the key names from your doctor's office bill to the console in Chrome.

    const billKeys = Object.keys(doctorBill)

    billKeys.forEach(singleKey => {
        document.querySelector("#bill-container").innerHTML += `<span>${singleKey}</span><br>`
        console.log(singleKey)
    })
// Next, output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

// -- SET THREE -- //

// Create an object to represent your favorite dinner item(e.g.meatloaf, spaghetti, fried fish, gumbo).Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favFood = {
    name: "Panang",
    size: "medium",
    weight: "1.5 lbs",
    ethnicity: "Vietnamese",
    vegetarian: false
}

// Output all of the key / value pairs into the DOM inside an < article > element with a class of food.
    const favFoodEntries = Object.entries(favFood)
    console.log(favFoodEntries)
        favFoodEntries.forEach(keyValuePair => {
            console.log (`${keyValuePair[0]} - ${keyValuePair[1]}`)
            document.querySelector("#bill-container").innerHTML += `<p>${keyValuePair[0]} - ${keyValuePair[1]}</p>`
        })


        const salesByWeek = [
            {
                "vehicle": {
                    "year": 2013,
                    "model": "Tanex",
                    "make": "Tamp-dax",
                    "color": "quartz"
                },
                "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
                "sales_agent": {
                    "mobile": "1-584-162-7444",
                    "last_name": "Larkin",
                    "first_name": "Tiara",
                    "email": "ready@gmail.com"
                },
                "purchase_date": "2017-06-07",
                "gross_profit": 210,
                "credit": {
                    "credit_provider": "United Services Automobile Assoc.",
                    "account": "491697193540559"
                }
            },
            {
                "vehicle": {
                    "year": 2012,
                    "model": "Volttanphase",
                    "make": "Tinlotis",
                    "color": "french fuchsia"
                },
                "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
                "sales_agent": {
                    "mobile": "1-573-820-3780",
                    "last_name": "Schulist",
                    "first_name": "Vada",
                    "email": "davin@outlook.com"
                },
                "purchase_date": "2017-08-06",
                "gross_profit": 1886.61,
                "credit": {
                    "credit_provider": "TD Group US Holding",
                    "account": "494781657570"
                }
            },
            {
                "vehicle": {
                    "year": 2013,
                    "model": "Lexi-ton",
                    "make": "Ware-com",
                    "color": "metallic brown"
                },
                "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
                "sales_agent": {
                    "mobile": "1-356-831-5782",
                    "last_name": "Leannon",
                    "first_name": "Geovanni",
                    "email": "need@hotmail.com"
                },
                "purchase_date": "2017-12-27",
                "gross_profit": 154.91,
                "credit": {
                    "credit_provider": "State Street Corporation",
                    "account": "546417363501851"
                }
            },
            {
                "vehicle": {
                    "year": 2011,
                    "model": "Onto-zun",
                    "make": "Strongzoom",
                    "color": "medium slate blue"
                },
                "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
                "sales_agent": {
                    "mobile": "774.020.0247",
                    "last_name": "Lang",
                    "first_name": "Jovani",
                    "email": "spell55@yahoo.com"
                },
                "purchase_date": "2017-03-05",
                "gross_profit": 814.49,
                "credit": {
                    "credit_provider": "M&T Bank Corporation",
                    "account": "34730046974022"
                }
            },
            {
                "vehicle": {
                    "year": 2014,
                    "model": "Blue-run",
                    "make": "Kon-flex",
                    "color": "lumber"
                },
                "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
                "sales_agent": {
                    "mobile": "886.374.3898",
                    "last_name": "Feil",
                    "first_name": "Kory",
                    "email": "ducimus@outlook.com"
                },
                "purchase_date": "2017-02-08",
                "gross_profit": 587.52,
                "credit": {
                    "credit_provider": "Atlantic Bank",
                    "account": "601149379893233"
                }
            }
        ]

const lastWeekSales = salesByWeek.forEach(singleSale => {
    // singleSale.vehicle.forEach(car => {
        let vehicleInfo = (Object.entries(singleSale.vehicle))
        let creditInfo = (Object.entries(singleSale.credit))
        let salesperson = (Object.entries(singleSale.sales_agent))
        console.log(vehicleInfo)
        console.log(creditInfo)
        console.log(salesperson)
        saleHTMLString = `<h4>${singleSale.sales_agent.first_name} ${singleSale.sales_agent.last_name} - ${singleSale.sales_agent.mobile} - ${singleSale.sales_agent.email}</h4><div>${vehicleInfo[0][0]} - ${vehicleInfo[0][1]}<br>${vehicleInfo[1][0]} - ${vehicleInfo[1][1]}<br>${vehicleInfo[2][0]} - ${vehicleInfo[2][1]}<br>${vehicleInfo[3][0]} - ${vehicleInfo[3][1]}<br>${creditInfo[0][0]} - ${creditInfo[0][1]}<br>${creditInfo[1][0]} - ${creditInfo[1][1]}</div><h4>Gross Profit - $${singleSale.gross_profit}</h4><br>`
    document.querySelector("#sales-container").innerHTML += saleHTMLString
    })

// })