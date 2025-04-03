import React from "react";
import {useState} from "react";
import './Lakier.css'


function  Lakiery()
{
    const [amount,setAmount] = useState(0);


    const Lakiery = [

        {id: "f1",kolor: "fioletowy", nazwa: "No Risk No story",cena: 27.29, tag: "Oszczedzasz 33%"},
        {id: "f2",kolor: "fioletowy", nazwa: "Moony Whispers",cena: 38.99, tag: "Mój wybór Kasia Kot"},
        {id: "f3",kolor: "fioletowy", nazwa: "Midnight Love", cena: 27.99, tag: "XMAS Trend"},
        {id: "f4",kolor: "fioletowy", nazwa: "New Bridge", cena: 32.99, tag: "Efekt Flash"},
        {id: "f5",kolor: "fioletowy", nazwa: "op Glow Violet", cena: 29.99, tag: "oszczedzasz 26%"},
        {id: "c1",kolor: "czerwony", nazwa: "Alizee", cena: 27.29, tag: "Oszczędzasz 31%"},
        {id: "c2",kolor: "czerwony", nazwa:"Mysterious Tale", cena: 32.99, tag: "GET THE LOOK"},
        {id: "c3",kolor: "czerwony", nazwa: "Aloha Mood",cena: 38.99, tag: "Mój wybór - Sara James"},
        {id: "c4",kolor: "czerwony", nazwa: "Fiery Flamenco",cena: 33.99, tag: "XMAS Trend"},
        {id: "c5",kolor: "czerwony", nazwa: "Pure Currant",cena: 4.99, tag: "PROMOCJA"},
        {id: "z1",kolor: "złoty", nazwa: "Top Glow Gold", cena: 29.99, tag: "XMAS Trend"},
        {id: "z2",kolor: "złoty", nazwa: "Sparkling Kiss", cena: 27.99, tag: " XMAS Trend"},
        {id: "z3",kolor: "złoty", nazwa: "g-INCREDIBLE", cena: 25.99, tag: "MANI & PEDI w 20 min!"},
        {id: "z4",kolor: "złoty", nazwa: "White Sparkle",cena: 9.99, tag: "Oszczedzasz 76%"},
        {id: "z5", kolor: "złoty", nazwa: "Glow Twinkle", cena: 39.99,tag: "XMAS Trend"}

]


    return (
        <>
            <div>
                <h1>
                    grafiki i inspiracja ze strony: NEONAIL.PL
                </h1>
                <div>
                    <p>{`wybierz odcień | ilosc w koszyku:  ${amount}`}</p>
                    <button><img src="fioletowy.jpg" alt="fioleotwy" ></img></button>
                    <button><img src="czerwony.jpg" alt="fioleotwy"></img></button>
                    <button><img src="zloty.jpg" alt="fioleotwy"></img></button>
                    <button><img src="wszystkie.jpg" alt="fioleotwy"></img></button>
                </div>
                <div className="odcienie">
                    {
                       Lakiery.map( function (lakier) {
                           return (
                               <div className="Lakier" key={lakier.id}>
                                   <img src={`${lakier.id}.jpg`}></img>
                                   <div className="Data">
                                       <h2> {lakier.nazwa} </h2>
                                       <p>{`odcień: ${lakier.kolor}`}</p>
                                       <p><b>{`cena: ${lakier.cena}`}</b></p>
                                       <p style={{backgroundColor: "salmon", width: "200px"}}>{lakier.tag}</p>
                                       <button onClick={() => {setAmount(amount + 1); alert(`Dodano kolor do koszyka lakier: ${lakier.nazwa}`)}} >Dodaj Do Koszyka</button>
                                   </div>
                               </div>
                           )
                       })


                    }

                </div>
            </div>

        </>
    )
}

export default Lakiery
