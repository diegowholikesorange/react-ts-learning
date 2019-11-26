import {Resolvers} from "./generated/graphql";
import * as https from "https";

const puppeteer = require('puppeteer');


export const resolvers: Resolvers = {
    Query: {
        pageContent: () => {
            return {};
        }
    },
    PageContent: {
        welcome: (root, {title: title, name}) => {
            return `Hello ${title}. ${name || 'World!'}`
        },
        properties: (root, {postcode: postcode}) => {
            const url = "https://www.realestate.com.au/buy/in-hawthorn+east,+vic+3123%3b/list-1";
            let htmlResponse = https.get(url);
            console.log("Received HTML");
            console.log(htmlResponse);

            let listings =  (async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto('https://www.realestate.com.au/buy/in-hawthorn+east,+vic+3123%3b/list-1');

                // await page.emulateMedia('screen');
                // await page.pdf({path: 'rea.pdf', format: 'A4'});

                await page.waitForSelector('.residential-card__details-link', {timeout: 2000})
                    .then(() => console.log('Page loaded'));
                let listing = await page.$$eval('.residential-card__details-link', e => e.map((a) => a.innerText));
                console.log("1>"+listing);

                await browser.close();

                return listing;
            })();

            console.log("2"+listings);
            return [{address: "1 Main Street " + postcode}, {address: "55 Central Ave"}]
        }
    }
};

