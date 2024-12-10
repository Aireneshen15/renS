
function convert(sourceId) {
    const decimalField = document.getElementById("decimal");
    const binaryField = document.getElementById("binary");
    const octalField = document.getElementById("octal");
    const hexField = document.getElementById("hexadecimal");

    let value = document.getElementById(sourceId).value;

    if (value === "") {
        clearFields();
        return;
    }

    let decimalValue;

    try {
        // Determine the decimal equivalent based on input type
        switch (sourceId) {
            case "decimal":
                decimalValue = parseInt(value, 10);
                break;
            case "binary":
                if (!/^[01]+$/.test(value)) throw new Error("Invalid binary input");
                decimalValue = parseInt(value, 2);
                break;
            case "octal":
                if (!/^[0-7]+$/.test(value)) throw new Error("Invalid octal input");
                decimalValue = parseInt(value, 8);
                break;
            case "hexadecimal":
                if (!/^[0-9A-Fa-f]+$/.test(value)) throw new Error("Invalid hexadecimal input");
                decimalValue = parseInt(value, 16);
                break;
        }

        // Update all fields
        decimalField.value = decimalValue.toString(10);
        binaryField.value = decimalValue.toString(2);
        octalField.value = decimalValue.toString(8);
        hexField.value = decimalValue.toString(16).toUpperCase();
    } catch (error) {
        // If invalid input, clear only the related fields
        if (sourceId === "decimal") binaryField.value = octalField.value = hexField.value = "";
        if (sourceId === "binary") decimalField.value = octalField.value = hexField.value = "";
        if (sourceId === "octal") decimalField.value = binaryField.value = hexField.value = "";
        if (sourceId === "hexadecimal") decimalField.value = binaryField.value = octalField.value = "";
    }
}

// Clear all fields
function clearFields() {
    document.getElementById("decimal").value = "";
    document.getElementById("binary").value = "";
    document.getElementById("octal").value = "";
    document.getElementById("hexadecimal").value = "";
}