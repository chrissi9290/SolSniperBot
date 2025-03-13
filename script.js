<script>
    const translations = {
        de: {
            title: "🚀 SOLPRINTER PONZI – Der ultimative Belohnungs-Token! 💰",
            description: "Willkommen bei SOLPRINTER PONZI, dem revolutionären Solana-Token, der dich für jede Transaktion automatisch belohnt!",
            tokenomicsTitle: "📊 Tokenomics",
            tokenomics1: "🔹 <b>75%</b> der Transaktionsgebühren gehen direkt an die Holder",
            tokenomics2: "🔹 <b>25%</b> der Gebühren fließen ins Team für Wachstum",
            tokenomics3: "🔹 <b>Automatische Ausschüttung alle 60 Minuten</b>",
            tokenomics4: "🔹 <b>SOLANA direkt auf dein Wallet</b>",
            tokenomics5: "🔥 <b>Der gesamte Liquidity Pool ist vollständig geburnt</b>",
            airdropTitle: "🎁 Exklusiver Airdrop",
            airdrop: "Sichere dir SOLPRINTER PONZI Token durch unseren exklusiven Airdrop! Der Airdrop bietet dir die Chance, frühzeitig dabei zu sein.",
            buy: "Jetzt kaufen & profitieren!"
        },
        en: {
            title: "🚀 SOLPRINTER PONZI – The Ultimate Reward Token! 💰",
            description: "Welcome to SOLPRINTER PONZI, the revolutionary Solana token that rewards you automatically for every transaction!",
            tokenomicsTitle: "📊 Tokenomics",
            tokenomics1: "🔹 <b>75%</b> of transaction fees go directly to holders",
            tokenomics2: "🔹 <b>25%</b> of fees go to the team for growth",
            tokenomics3: "🔹 <b>Automatic payout every 60 minutes</b>",
            tokenomics4: "🔹 <b>SOLANA directly to your wallet</b>",
            tokenomics5: "🔥 <b>The entire liquidity pool is completely burned</b>",
            airdropTitle: "🎁 Exclusive Airdrop",
            airdrop: "Secure your SOLPRINTER PONZI tokens through our exclusive airdrop! The airdrop gives you the chance to join early.",
            buy: "Buy now & profit!"
        },
        fr: {
            title: "🚀 SOLPRINTER PONZI – Le jeton de récompense ultime! 💰",
            description: "Bienvenue sur SOLPRINTER PONZI, le jeton révolutionnaire de Solana qui vous récompense automatiquement à chaque transaction!",
            tokenomicsTitle: "📊 Tokenomics",
            tokenomics1: "🔹 <b>75%</b> des frais de transaction vont directement aux détenteurs",
            tokenomics2: "🔹 <b>25%</b> des frais vont à l'équipe pour la croissance",
            tokenomics3: "🔹 <b>Versement automatique toutes les 60 minutes</b>",
            tokenomics4: "🔹 <b>SOLANA directement sur votre portefeuille</b>",
            tokenomics5: "🔥 <b>L'ensemble du pool de liquidité est entièrement brûlé</b>",
            airdropTitle: "🎁 Airdrop exclusif",
            airdrop: "Obtenez vos jetons SOLPRINTER PONZI grâce à notre airdrop exclusif! L'airdrop vous donne la chance de rejoindre tôt.",
            buy: "Achetez maintenant & profitez-en!"
        },
        es: {
            title: "🚀 SOLPRINTER PONZI – ¡El token de recompensa definitivo! 💰",
            description: "Bienvenido a SOLPRINTER PONZI, el token revolucionario de Solana que te recompensa automáticamente por cada transacción.",
            tokenomicsTitle: "📊 Tokenomics",
            tokenomics1: "🔹 <b>75%</b> de las tarifas de transacción van directamente a los titulares",
            tokenomics2: "🔹 <b>25%</b> de las tarifas van al equipo para el crecimiento",
            tokenomics3: "🔹 <b>Pago automático cada 60 minutos</b>",
            tokenomics4: "🔹 <b>SOLANA directamente a tu billetera</b>",
            tokenomics5: "🔥 <b>El pool de liquidez está completamente quemado</b>",
            airdropTitle: "🎁 Airdrop exclusivo",
            airdrop: "¡Asegura tus tokens SOLPRINTER PONZI a través de nuestro airdrop exclusivo! El airdrop te da la oportunidad de unirte temprano.",
            buy: "¡Compra ahora y obtén ganancias!"
        },
        ru: {
            title: "🚀 SOLPRINTER PONZI – Лучший наградной токен! 💰",
            description: "Добро пожаловать в SOLPRINTER PONZI, революционный токен Solana, который автоматически вознаграждает вас за каждую транзакцию!",
            tokenomicsTitle: "📊 Tokenomics",
            tokenomics1: "🔹 <b>75%</b> комиссий идут напрямую держателям",
            tokenomics2: "🔹 <b>25%</b> комиссий идут команде на развитие",
            tokenomics3: "🔹 <b>Автоматические выплаты каждые 60 минут</b>",
            tokenomics4: "🔹 <b>SOLANA сразу на ваш кошелек</b>",
            tokenomics5: "🔥 <b>Весь пул ликвидности полностью сожжен</b>",
            airdropTitle: "🎁 Эксклюзивный Airdrop",
            airdrop: "Получите свои токены SOLPRINTER PONZI через наш эксклюзивный airdrop! Airdrop дает вам шанс присоединиться рано.",
            buy: "Купите сейчас и зарабатывайте!"
        }
    };

    function changeLanguage(lang) {
        document.getElementById("title").innerText = translations[lang].title;
        document.getElementById("description").innerText = translations[lang].description;
        document.getElementById("tokenomics-title").innerText = translations[lang].tokenomicsTitle;
        document.getElementById("tokenomics-1").innerHTML = translations[lang].tokenomics1;
        document.getElementById("tokenomics-2").innerHTML = translations[lang].tokenomics2;
        document.getElementById("tokenomics-3").innerHTML = translations[lang].tokenomics3;
        document.getElementById("tokenomics-4").innerHTML = translations[lang].tokenomics4;
        document.getElementById("tokenomics-5").innerHTML = translations[lang].tokenomics5;
        document.getElementById("airdrop-title").innerText = translations[lang].airdropTitle;
        document.getElementById("airdrop").innerText = translations[lang].airdrop;
        document.getElementById("buy").innerText = translations[lang].buy;
    }
</script>
