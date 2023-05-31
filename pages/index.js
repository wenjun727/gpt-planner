import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";


export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [daysInput, setDaysInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput, day: daysInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
      setDaysInput("");
      
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  function handleClick() {
    var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  alert("Done Copied!");
  }

  return (
    <div>
    <Head>
        <title>Travel Planner Testing</title>
        <link rel="icon" href="/travel.png" />
      </Head>
      
      <main className={styles.main}>
      <img src="/goTravel.png" className={styles.icon} />
        <img src="/travel.png" className={styles.icon} />
        <h1>Travel Planner Testing App</h1>
        <h5>(recommended by AI - powered by ChatGPT 3.5)</h5>
        <p>
          Model: text-davinci-003
          <br></br>
          Temperature: 0
        </p>
        
      <br></br>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter any destination"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input
            type="number"
            name="days"
            placeholder="Enter no. of days"
            value={daysInput}
            onChange={(f) => setDaysInput(f.target.value)}
          />
          <br></br>
          <input type="submit" value="Generate Itinerary" />
          <br></br>
        </form>
        <input style={{size: 300}} id="myInput" onChange={(g) => setResult(g.target.value)} value={result}></input>
        <br></br>
        <button onClick={handleClick}>Copy!</button>
        <br></br>
        Go to <a href="https://jsonviewer.stack.hu/" target="_blank">here</a> to paste the json then click "Format". Happy Testing!
      </main>
        </div>
  );
}

/*

*/