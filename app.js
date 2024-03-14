// grover
async function fetchStockData() {
    const url = 'https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=xsX2einroWYZAiCKZzQJaKDgWmpxOPfH';
    const container = document.getElementById('exchanges-container');

    try {
        const response = await fetch(url);
        const result = await response.json();

        
        if (result.status === 'OK') {
            const exchanges = result.results.slice(0, 5);
            exchanges.forEach(exchange => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="card-title">${exchange.name}</div>
                    <div class="card-text">Exchange Acronym: ${exchange.acronym || 'N/A'}</div>
                    <div class="card-text">MIC: ${exchange.mic}</div>
                    <div class="card-text">Operating MIC: ${exchange.operating_mic}</div>
                    <div class="card-text">URL: <a class="card-link" href="${exchange.url}" target="_blank">${exchange.url}</a></div>
                `;
                container.appendChild(card);
            });
        }
        
         else {
            console.error("Error in API response: ${ result.status }");
        }
    } catch (error) {
        console.error(error);
    }
}


document.addEventListener('DOMContentLoaded', fetchStockData);


// dikshit


function toggleDivs(headerId, start, end) {
    const header = document.getElementById(headerId);
    header.classList.toggle('expanded');

    
    for (let i = start; i <= end; i++) {
        const div = document.getElementById('div' + i);
        div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';
    }
}


document.getElementById('minInvestment').addEventListener('click', function () {
    toggleDivs('minInvestment', 1, 4);
});

document.getElementById('volatility').addEventListener('click', function () {
    toggleDivs('volatility', 5, 7);
});

document.getElementById('index').addEventListener('click', function () {
    toggleDivs('index', 8, 13);
});

document.getElementById('manager').addEventListener('click', function () {
    toggleDivs('manager', 14, 18);
});



function addFaqItem(question, answer) {
    const faqContainer = document.querySelector(".q");

    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    const questionElement = document.createElement("h3");
    questionElement.innerHTML = "&#43; " + question;

    const answerElement = document.createElement("p");
    answerElement.classList.add("answer");
    answerElement.textContent = answer;

    questionElement.addEventListener("click", function () {
        
        const allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function (item) {
            if (item !== answerElement) {
                item.style.display = "none";
            }
        });

        
        answerElement.style.display =
            answerElement.style.display === "none" ||
                answerElement.style.display === ""
                ? "block"
                : "none";
    });

    faqItem.appendChild(questionElement);
    faqItem.appendChild(answerElement);

    faqContainer.appendChild(faqItem);
}


addFaqItem(
    "What is smallcase?",
    "smallcases are modern investment products that help you build a low-cost, long-term & diversified portfolio easily. Created by professionals, each smallcase is a ready-made basket of stocks/ETFs that reflects a theme, strategy or objective."
);
addFaqItem(
    "Who manages smallcases?",
    "smallcases are created & managed by SEBI registered professionals who eat, sleep & breathe the stock market. The constituents in every smallcase pass stringent proprietary filters so that you don’t have to worry about making individual choices."
);
addFaqItem(
    "How to invest in smallcases?",
    "A trading & demat account with any of our broker partners is all you need. Once you have chosen a smallcase, subscribe to the smallcase (only for fee-based smallcases), click the Invest now button & proceed."
);
addFaqItem(
    "Who owns the stocks/ETFs?",
    "The stocks/ETFs are owned by investors directly in their demat account."
);
addFaqItem(
    "What are the charges for investing in smallcases?",
    "In addition, your broker platform applies transaction charges when you transact. Visit the help page on your broker platform for more information."
);
addFaqItem(
    "What is rebalancing?",
    "Rebalancing is the process of reviewing the stocks/ETFs of a smallcase to ensure that it continues to reflect the underlying original idea. It takes into account fundamental factors, company updates, etc. to objectively narrow down on the right stocks/ETFs."
);
addFaqItem(
    "How are smallcases taxed?",
    "For smallcases of stocks, the taxes are the same as equities - Long-Term Capital Gains (> 1 year of holding) are 10% of the total gains (if gains for the year exceed ₹1 lakh) and Short-Term Capital Gains (< 1 year of holding) are 15% of the total gains."
);
addFaqItem(
    "Can I buy smallcase as a SIP?",
    "Yes, you can buy and start a SIP in a smallcase in 1 click. You'll see an option to start SIP while buying the smallcase."
);
addFaqItem(
    "Do you get dividends from smallcases?",
    "Dividends for any of the constituent stocks in the smallcase will be credited directly to your bank account."
);
addFaqItem(
    "How to track the performance of a smallcase?",
    "Under Holdings tab of your Equity portfolio, Group by: All, smallcase will give you performance details of your invested smallcases such as current returns, realised returns, dividend returns etc. With smallcases, you don’t have to track the performance of your stocks individually."
);
