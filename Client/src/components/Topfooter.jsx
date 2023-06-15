import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons"

export const Topfooter = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", width: "70%" }}>
            <div>
                <p>NEW YORK</p>
                <hr />
                <p>
                    Marian Goodman Gallery <br />
                    24 West 57th Street <br />
                    New York, NY 10019 <br />
                </p>
                <p>
                    T 212-977-7160 <br />
                    newyork@mariangoodman.com
                </p>
                <p>
                    Monday - Saturday, 10 am - 6 pm <br />
                    Closed Monday, June 19, 2023
                </p>
                <p><ArrowForwardIcon /> View Map</p>
            </div>
            <div>
                <p>PARIS</p>
                <hr />
                <p>
                    Galerie Marian Goodman <br />
                    79 & 66 rue du Temple <br />
                    75003 Paris <br />
                </p>
                <p>
                    T + 33(0)1 - 48-04 - 70 - 52 <br />
                    paris @mariangoodman.com
                </p>
                <p>
                    Tuesday - Saturday, 11 am - 7 pm <br />
                    Closed Monday, June 19, 2023
                </p>
                <p><ArrowForwardIcon /> View Map</p>
            </div>
            <div>
                <p>LOS ANGELES</p>
                <hr />
                <p>
                    Marian Goodman Gallery <br />
                    Hollywood <br />
                    Los Angeles, CA 90038 <br />
                </p>
                <p>
                    T 212-977-7160 <br />
                    losangeles@mariangoodman.com
                </p>
                <p>
                    Monday - Saturday, 10 am - 6 pm <br />
                    Closed Monday, June 19, 2023
                </p>
            </div>
        </div>
    )
}








