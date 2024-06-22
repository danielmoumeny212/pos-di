import { fileURLToPath } from 'url';
// import createJiti from 'jiti';


// createJiti(fileURLToPath(import.meta.url))("./src/env");

/** @type {import('next').NextConfig} */
<<<<<<< HEAD

const nextConfig = {
    // images:{
    //     remotePatterns:[
    //         {
    //             protocol:'https',
    //             hostname:'images.unsplash.com',
    //             pathname:'**'
    //         }
    //     ]
    // }
=======
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'images.unsplash.com',
                pathname:'**'
            }
        ]
    }
>>>>>>> master
};

export default nextConfig;
