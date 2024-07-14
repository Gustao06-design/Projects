function converter() {
    const valor = document.getElementById("valor").value;
    const moedaDe = document.querySelector("select[name=primeiraMoeda]").value;
    const moedaPara = document.querySelector("select[name=segundaMoeda]").value;

    const url = `https://v6.exchangerate-api.com/v6/e4b750eab0892ef2a86f3366/latest/${moedaDe}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao recuperar os dados da API');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const chave = moedaPara.toUpperCase();
            const cotacao = parseFloat(data.conversion_rates[chave]); 
            const resultado = valor * cotacao;
            const mensagem = verificar(resultado, moedaPara);
            document.getElementById("resultado").innerText = mensagem;
            if (mensagem) {
                console.log(mensagem); 
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao acessar a API:', error);
        });
}

    

function verificar(resultado, moedaPara) {
    if (moedaPara === 'aed') {
        return `AED ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'afn') {
        return `AFN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'all') {
        return `ALL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'amd') {
        return `AMD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ang') {
        return `ANG ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'aoa') {
        return `AOA ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'aed') {
        return `AED ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'afn') {
        return `AFN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'all') {
        return `ALL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'amd') {
        return `AMD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ang') {
        return `ANG ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'aoa') {
        return `AOA ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ars') {
        return `ARS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'aud') {
        return `AUD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'awg') {
        return `AWG ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'azn') {
        return `AZN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bam') {
        return `BAM ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bbd') {
        return `BBD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bdt') {
        return `BDT ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bgn') {
        return `BGN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bhd') {
        return `BHD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bif') {
        return `BIF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bmd') {
        return `BMD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bnd') {
        return `BND ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bob') {
        return `BOB ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'brl') {
        return `BRL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bsd') {
        return `BSD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'btn') {
        return `BTN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bwp') {
        return `BWP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'byn') {
        return `BYN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'bzd') {
        return `BZD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'cad') {
        return `CAD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'cdf') {
        return `CDF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'chf') {
        return `CHF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'clp') {
        return `CLP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'cny') {
        return `CNY ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'cop') {
        return `COP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'crc') {
        return `CRC ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'cup') {
        return `CUP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'cve') {
        return `CVE ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'czk') {
        return `CZK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'djf') {
        return `DJF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'dkk') {
        return `DKK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'dop') {
        return `DOP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'dzd') {
        return `DZD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'egp') {
        return `EGP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ern') {
        return `ERN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'etb') {
        return `ETB ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'eur') {
        return `EUR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'fjd') {
        return `FJD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'fkp') {
        return `FKP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'fok') {
        return `FOK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gbp') {
        return `GBP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gel') {
        return `GEL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ggp') {
        return `GGP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ghs') {
        return `GHS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gip') {
        return `GIP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gmd') {
        return `GMD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gnf') {
        return `GNF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gtq') {
        return `GTQ ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'gyd') {
        return `GYD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'hkd') {
        return `HKD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'hnl') {
        return `HNL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'hrk') {
        return `HRK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'htg') {
        return `HTG ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'huf') {
        return `HUF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'idr') {
        return `IDR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ils') {
        return `ILS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'imp') {
        return `IMP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'inr') {
        return `INR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'iqd') {
        return `IQD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'irr') {
        return `IRR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'isk') {
        return `ISK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'jep') {
        return `JEP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'jmd') {
        return `JMD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'jod') {
        return `JOD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'jpy') {
        return `JPY ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kes') {
        return `KES ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kgs') {
        return `KGS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'khr') {
        return `KHR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kid') {
        return `KID ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kmf') {
        return `KMF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'krw') {
        return `KRW ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kwd') {
        return `KWD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kyd') {
        return `KYD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'kzt') {
        return `KZT ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'lak') {
        return `LAK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'lbp') {
        return `LBP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'lkr') {
        return `LKR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'lrd') {
        return `LRD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'lsl') {
        return `LSL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'lyd') {
        return `LYD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mad') {
        return `MAD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mdl') {
        return `MDL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mga') {
        return `MGA ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mkd') {
        return `MKD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mmk') {
        return `MMK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mnt') {
        return `MNT ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mop') {
        return `MOP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mru') {
        return `MRU ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mur') {
        return `MUR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mvr') {
        return `MVR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mwk') {
        return `MWK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mxn') {
        return `MXN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'myr') {
        return `MYR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'mzn') {
        return `MZN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'nad') {
        return `NAD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ngn') {
        return `NGN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'nio') {
        return `NIO ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'nok') {
        return `NOK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'npr') {
        return `NPR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'nzd') {
        return `NZD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'omr') {
        return `OMR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'pab') {
        return `PAB ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'pen') {
        return `PEN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'pgk') {
        return `PGK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'php') {
        return `PHP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'pkr') {
        return `PKR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'pln') {
        return `PLN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'pyg') {
        return `PYG ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'qar') {
        return `QAR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ron') {
        return `RON ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'rsd') {
        return `RSD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'rub') {
        return `RUB ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'rwf') {
        return `RWF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sar') {
        return `SAR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sbd') {
        return `SBD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'scr') {
        return `SCR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sdg') {
        return `SDG ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sek') {
        return `SEK ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sgd') {
        return `SGD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'shp') {
        return `SHP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sle') {
        return `SLE ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sll') {
        return `SLL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'sos') {
        return `SOS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'srd') {
        return `SRD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ssp') {
        return `SSP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'stn') {
        return `STN ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'syp') {
        return `SYP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'szl') {
        return `SZL ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'thb') {
        return `THB ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'tjs') {
        return `TJS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'tmt') {
        return `TMT ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'tnd') {
        return `TND ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'top') {
        return `TOP ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'try') {
        return `TRY ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ttd') {
        return `TTD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'tvd') {
        return `TVD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'twd') {
        return `TWD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'tzs') {
        return `TZS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'uah') {
        return `UAH ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ugx') {
        return `UGX ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'usd') {
        return `USD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'uyu') {
        return `UYU ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'uzs') {
        return `UZS ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'ves') {
        return `VES ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'vnd') {
        return `VND ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'vuv') {
        return `VUV ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'wst') {
        return `WST ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'xaf') {
        return `XAF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'xcd') {
        return `XCD ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'xdr') {
        return `XDR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'xof') {
        return `XOF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'xpf') {
        return `XPF ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'yer') {
        return `YER ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'zar') {
        return `ZAR ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'zmw') {
        return `ZMW ${resultado.toFixed(2)}`;
    }
    if (moedaPara === 'zwl') {
        return `ZWL ${resultado.toFixed(2)}`;
    }
}