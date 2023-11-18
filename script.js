function convertSequence() {
    var inputSequence = document.getElementById("sequence").value.toUpperCase();
    var sequenceType = document.getElementById("type").value;
    var resultElement = document.getElementById("result");

    if (!isValidSequence(inputSequence, sequenceType)) {
        resultElement.textContent = "Error: Invalid sequence for the selected type. Make sure that there are not any spaces or other useless characters in the input and that you have selected the correct type.";

        return;
    }

    var result = "";

    for (var i = 0; i < inputSequence.length; i++) {
        var currentBase = inputSequence[i];

        if (sequenceType === "dna") {
            if (currentBase === "A") {
                result += "T";
            } else if (currentBase === "T") {
                result += "A";
            } else if (currentBase === "C") {
                result += "G";
            } else if (currentBase === "G") {
                result += "C";
            }
        } else if (sequenceType === "rna") {
            if (currentBase === "A") {
                result += "U";
            } else if (currentBase === "U") {
                result += "A";
            } else if (currentBase === "C") {
                result += "G";
            } else if (currentBase === "G") {
                result += "C";
            }
        }
    }

    resultElement.textContent = result;
}

function isValidSequence(sequence, type) {
    var validBases;

    if (type === "dna") {
        validBases = /^[ATCG]*$/;
    } else if (type === "rna") {
        validBases = /^[AUCG]*$/;
    } else {
        return false;
    }

    return validBases.test(sequence);
}
