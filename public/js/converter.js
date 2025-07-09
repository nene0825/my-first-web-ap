// ここからコードを書いてください
const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
];

export const setupConverter = () => {
    const converterForm = document.querySelector(".converter-form");
    const converterInput = document.querySelector(".converter-input");
    // 変換元の select 要素を取得
    const converterFrom = document.querySelector(".converter-from");
    const converterTo = document.querySelector(".converter-to");
    const converterResult = document.querySelector(".converter-result");

    // 単位選択欄 (converterFrom と converterTo) にオプションを追加
    lengthUnit.forEach(unit => {
        // converterFrom 用のオプション
        const optionFrom = document.createElement("option");
        optionFrom.value = unit.base;
        optionFrom.textContent = unit.name;
        converterFrom.appendChild(optionFrom);

        // converterTo 用のオプション
        const optionTo = document.createElement("option");
        optionTo.value = unit.base;
        optionTo.textContent = unit.name;
        converterTo.appendChild(optionTo);
    });

    // 初期選択値の設定
    converterFrom.value = lengthUnit.find(unit => unit.name === "meter").base;
    converterTo.value = lengthUnit.find(unit => unit.name === "kilometer").base;

    //変換処理を行う関数を定義
    const performConversion = () => {
        const inputValue = parseFloat(converterInput.value);

        // ★ここを修正: inputValue (iが大文字) に
        if (isNaN(inputValue)) {
            converterResult.textContent = 'Please enter a valid number';
            return;
        }

        const fromUnitBase = parseFloat(converterFrom.value);
        const fromUnitName = converterFrom.options[converterFrom.selectedIndex].textContent;


        const toUnitBase = parseFloat(converterTo.value);
        // ★ここを修正: .options を使う
        const toUnitName = converterTo.options[converterTo.selectedIndex].textContent;


        const convertedValue = (inputValue * fromUnitBase) / toUnitBase;

        converterResult.textContent = `${inputValue} ${fromUnitName} = ${convertedValue.toFixed(3)} ${toUnitName}`;
    };

    // --- イベントリスナーの設定 ---
    converterInput.addEventListener('input', performConversion);
    converterFrom.addEventListener('change', performConversion);
    converterTo.addEventListener('change', performConversion);

    // ページロード時に一度初期値を表示するために実行
    performConversion();

}