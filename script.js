function convertJson() {
    const input = document.getElementById('jsonInput').value;
    const resultContainer = document.getElementById('result');

    try {
        const jsonData = JSON.parse(input);

        // تحويل التنسيق إلى التنسيق المطلوب
        const result = Object.keys(jsonData).map(key => {
            return `"${key}": "${jsonData[key]}"`;
        }).join(",\n");

        // عرض النتيجة
        resultContainer.textContent = "{\n" + result + "\n}";

    } catch (e) {
        resultContainer.textContent = "يرجى إدخال JSON صحيح.";
    }
}
