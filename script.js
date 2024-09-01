function convertJson() {
    const input = document.getElementById('jsonInput').value;
    const resultContainer = document.getElementById('result');

    try {
        const jsonData = JSON.parse(input);

        // تحويل التنسيق إلى التنسيق المطلوب
        const transformedData = {
            "جامعة حلبجة": {
                "كلية القانون والاعمال": [
                    {
                        "department": jsonData["D"],
                        "A": jsonData["A"],
                        "B": jsonData["B"],
                        "C": jsonData["C"]
                    }
                ]
            }
        };

        // عرض النتيجة
        resultContainer.textContent = JSON.stringify(transformedData, null, 4);

    } catch (e) {
        resultContainer.textContent = "يرجى إدخال JSON صحيح.";
    }
}
