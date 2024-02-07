
export var urlBase;
const production = false


if (production) {
    console.log("inside xx")

    urlBase = 'https://difficult-petticoat.cyclic.app/api'
} else {
    console.log("inside else")
    urlBase = 'http://192.168.56.1:4500/api'
}


// //("urlBase---------->", import.meta.env.VITE_REACT_APP_ENV);


// if (import.meta.env.VITE_REACT_APP_ENV === 'true') {
//     // Production
//     urlBase = 'https://difficult-petticoat.cyclic.app/api/'
// } else if (import.meta.env.VITE_REACT_APP_ENV === 'false') {
//     // Development
//     urlBase = 'http://192.168.0.111:4500/';

// }


// //("urlBase=======", urlBase)







// // Users
// export const register = urlBase + 'users/register'
// export const login = urlBase + 'users/login'
// export const forgotPassword = urlBase + 'users/forgotPassword'
// export const resetPassword = urlBase + 'users/resetPassword'
// export const getcurrentuser = urlBase + 'users/get-current-user'
// export const getAllDonorsOfOrg = urlBase + 'users/get-all-donors'
// export const getAllHospOfOrg = urlBase + 'users/get-all-hospitals'
// export const getAllOrgForDonor = urlBase + 'users/get-all-org-for-donor'
// export const getAllOrgForHospital = urlBase + 'users/get-all-org-for-hospital'

// // Inventory
// export const addInventory = urlBase + 'inventory/addInventory'
// export const getInventory = urlBase + 'inventory/getInventory'
// export const getInventoryWithFilters = urlBase + 'inventory/getInventory-filter'

// // Dashboard
// export const getAllBloodData = urlBase + 'dashboard/bloodGroup-data-all'







