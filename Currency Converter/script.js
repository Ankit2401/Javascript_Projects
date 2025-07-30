async function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (amount === "" || amount <= 0) {
    document.getElementById("result").innerText = "Please enter a valid amount.";
    return;
  }

  const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    document.getElementById("result").innerText = 
      `🧮 ${amount} ${from} = ${data.rates[to].toFixed(2)} ${to}`;
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching rates. Try again.";
  }
}
