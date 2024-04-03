import React, {useState} from 'react';
import axios from "axios";

const RandomCardSelector = () => {

    const [card, setCard] = useState({
        artist: "Pete Venters",
        artist_ids: ["d54c4a1a-c0c5-4834-84db-125d341f3ad8"],
        booster: true,
        border_color: "black",
        card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
        cardmarket_id: 13565,
        cmc: 1,
        collector_number: "109",
        color_identity: ["B"],
        colors: ["B"],
        digital: false,
        edhrec_rank: 12019,
        finishes: ["nonfoil", "foil"],
        flavor_text: `"Once the brew gets the brains nice and pickled, they're a lot easier to pick through."`,
        foil: true,
        frame: "2003",
        full_art: false,
        games: ["paper", "mtgo"],
        highres_image: true,
        id: "b6f8df33-a955-403c-aafc-85e5589c5041",
        illustration_id: "df8d50e2-da32-45a1-b5d6-b4823fa5c8a8",
        image_status: "highres_scan",
        image_uris:
            {
                small: "https://cards.scryfall.io/small/front/b/6/b6f8df33-a955-403c-aafc-85e5589c5041.jpg?1598915252",
                normal: "https://cards.scryfall.io/normal/front/b/6/b6f8df33-a955-403c-aafc-85e5589c5041.jpg?1598915252",
                large: "https://cards.scryfall.io/large/front/b/6/b6f8df33-a955-403c-aafc-85e5589c5041.jpg?1598915252",
            },
        keywords: [],
        lang: "en",
        layout: "normal",
        legalities:
            {
                standard: "not_legal",
                future: "not_legal",
                historic: "not_legal",
            },
        mana_cost: "{B}",
        mtgo_foil_id: 23007,
        mtgo_id: 23006,
        multiverse_ids: [83576],
        name: "Thoughtpicker Witch",
        nonfoil: true,
        object: "card",
        oracle_id: "6f78d21b-1959-4edc-9f28-d7ada539abef",
        oracle_text: "{1}, Sacrifice a creature: Look at the top two cards of target opponent's library, then exile one of them.",
        oversized: false,
        penny_rank: 5035,
        power: "1",
        prices:
            {
                usd: "0.16",
                usd_foil: "4.32",
                eur: "0.09",
            },
        prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A6f78d21b-1959-4edc-9f28-d7ada539abef&unique=prints",
        promo: false,
        purchase_uris:
            {
                tcgplayer: "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F13447%3Fpage%3D1",
                cardmarket: "https://www.cardmarket.com/en/Magic/Products/Singles/Ravnica-City-of-Guilds/Thoughtpicker-Witch?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
                cardhoarder: "https://www.cardhoarder.com/cards/23006?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
            },
        rarity: "common",
        related_uris:
            {
                gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=83576&printed=false",
                tcgplayer_infinite_articles: "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DThoughtpicker%2BWitch",
                tcgplayer_infinite_decks: "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DThoughtpicker%2BWitch",
            },
        released_at: "2005-10-07",
        reprint: false,
        reserved: false,
        rulings_uri: "https://api.scryfall.com/cards/b6f8df33-a955-403c-aafc-85e5589c5041/rulings",
        scryfall_set_uri: "https://scryfall.com/sets/rav?utm_source=api",
        scryfall_uri: "https://scryfall.com/card/rav/109/thoughtpicker-witch?utm_source=api",
        set: "rav",
        set_id: "15fccbe8-2825-41ca-9d0a-67aebdf91c4a",
        set_name: "Ravnica: City of Guilds",
        set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Arav&unique=prints",
        set_type: "expansion",
        set_uri: "https://api.scryfall.com/sets/15fccbe8-2825-41ca-9d0a-67aebdf91c4a",
        story_spotlight: false,
        tcgplayer_id: 13447,
        textless: false,
        toughness: "1",
        type_line: "Creature — Human Wizard",
        uri: "https://api.scryfall.com/cards/b6f8df33-a955-403c-aafc-85e5589c5041",
        variation: false
    });

    let getRandomCard = () => {
        console.log("entered random card")
        axios.get('https://api.scryfall.com/cards/random', {})
            .then(function (response) {
                setCard(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return (
        <div>
            <header>Random Card Selector</header>
            <div id='cardInfo'>{card.name}</div>
            <div id='cardInfo'>{card.cmc}</div>
            <div id='cardInfo'>{card.color_identity}</div>
            <div id='cardInfo'>{card.flavor_text}</div>
            <div id='cardInfo'>{card.tcgplayer_id}</div>
            <img src={card.image_uris.normal} alt="Shits broke yo"/>
            {
                Object.entries(card).map(([key, value]) => {
                    if (typeof value === "string") {
                        return <div>{key} | {value}</div>
                    } else if (value instanceof Array) {
                        return <div>{key} | {JSON.stringify(value)}</div>
                    } else return <div>{key} | {JSON.stringify(value)}</div>
                    //Does not render Objects currently
                })
            }
            <button onClick={getRandomCard}>
                Fetch a card
            </button>
        </div>
    );
};
export default RandomCardSelector;