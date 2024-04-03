import React, {useState} from 'react';
import axios from "axios";

function NamedCardSelector() {

    const [card, setCard] = useState({
        artist: "Caroline Gariba",
        artist_ids: ["61a4c572-3d1b-4b71-aeb0-1a5a6b82c524"],
        booster: false,
        border_color: "black",
        card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
        cardmarket_id: 652467,
        cmc: 4,
        collector_number: "73",
        color_identity: ["G", "R"],
        colors: ["G", "R"],
        digital: false,
        edhrec_rank: 2680,
        finishes: ["nonfoil"],
        foil: false,
        frame: "2015",
        frame_effects: ["legendary"],
        full_art: false,
        games: ["paper"],
        highres_image: true,
        id: "61c217d9-21d5-45ef-938a-138192a901f4",
        illustration_id: "f3cb9d76-e3a8-4be7-aef1-6ee5dcf6b0bc",
        image_status: "highres_scan",
        image_uris:
            {
                small: "https://cards.scryfall.io/small/front/6/1/61c217d9-21d5-45ef-938a-138192a901f4.jpg?1673482382",
                normal: "https://cards.scryfall.io/normal/front/6/1/61c217d9-21d5-45ef-938a-138192a901f4.jpg?1673482382",
                large: "https://cards.scryfall.io/large/front/6/1/61c217d9-21d5-45ef-938a-138192a901f4.jpg?1673482382"
            }
        ,
        keywords: ["Treasure"],
        lang: "en",
        layout: "normal",
        legalities:
            {
                standard: "not_legal",
                future: "not_legal",
                historic: "not_legal"
            },
        mana_cost: "{2}{R}{G}",
        multiverse_ids: [],
        name: "Jolene, the Plunder Queen",
        nonfoil: true,
        object: "card",
        oracle_id: "8215f4a2-7131-426b-ad9c-6427caabd715",
        oracle_text: "Whenever a player attacks one or more of your opponents, that attacking player creates a Treasure token.\nIf you would create one or more Treasure tokens, instead create those tokens plus an additional Treasure token.\nSacrifice five Treasures: Put five +1/+1 counters on Jolene.",
        oversized: false,
        power: "2",
        prices:
            {
                usd: "4.58",
                usd_foil: null,
                eur: "1.96"
            },
        prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A8215f4a2-7131-426b-ad9c-6427caabd715&unique=prints",
        promo: false,
        purchase_uris:
            {
                tcgplayer: "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F269743%3Fpage%3D1",
                cardmarket: "https://www.cardmarket.com/en/Magic/Products/Singles/Commander-Streets-of-New-Capenna/Jolene-the-Plunder-Queen?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
                cardhoarder: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Jolene%2C+the+Plunder+Queen&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
            },
        rarity: "rare",
        related_uris:
            {
                tcgplayer_infinite_articles: "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DJolene%252C%2Bthe%2BPlunder%2BQueen",
                tcgplayer_infinite_decks: "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DJolene%252C%2Bthe%2BPlunder%2BQueen",
                edhrec: "https://edhrec.com/route/?cc=Jolene%2C+the+Plunder+Queen"
            },
        released_at: "2022-04-29",
        reprint: false,
        reserved: false,
        rulings_uri: "https://api.scryfall.com/cards/61c217d9-21d5-45ef-938a-138192a901f4/rulings",
        scryfall_set_uri: "https://scryfall.com/sets/ncc?utm_source=api",
        scryfall_uri: "https://scryfall.com/card/ncc/73/jolene-the-plunder-queen?utm_source=api",
        security_stamp: "oval",
        set: "ncc",
        set_id: "c51de34b-d4d6-4179-a432-573744ded119",
        set_name: "New Capenna Commander",
        set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Ancc&unique=prints",
        set_type: "commander",
        set_uri: "https://api.scryfall.com/sets/c51de34b-d4d6-4179-a432-573744ded119",
        story_spotlight: false,
        tcgplayer_id: 269743,
        textless: false,
        toughness: "2",
        type_line: "Legendary Creature — Human Warrior",
        uri: "https://api.scryfall.com/cards/61c217d9-21d5-45ef-938a-138192a901f4",
        variation: false
    });

    const [cardToSearch, setCardToSearch] = useState("");
    let getSpecificCard = () => {
        console.log("entered random card")
        axios.get('https://api.scryfall.com/cards/named?fuzzy=' + cardToSearch, {})
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
        <div id="specific-search-container">
            <h1>Enter your card to Search for</h1>
            <div id="specific-search-container">
                <input id="specific-search-textbox" placeholder="Enter card Name" value={cardToSearch}
                       onChange={(e) => {
                           setCardToSearch(e.target.value)
                       }}/>
                <button id="specific-search-button" onClick={getSpecificCard}>Search</button>
            </div>

            <img src={card.image_uris.normal} alt={"Shits broke yo"}/>
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
        </div>
    );
}

export default NamedCardSelector;