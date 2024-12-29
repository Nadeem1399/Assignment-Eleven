function limitText(limitField, limitCount, limitNum) {
    // Get the current length of the textarea content
    const currentLength = limitField.value.length;

    // Check if the current length exceeds the limit
    if (currentLength > limitNum) {
        // If it does, truncate the value to the maximum allowed length
        limitField.value = limitField.value.substring(0, limitNum);
    }

    // Calculate the remaining characters
    const remainingChars = limitNum - limitField.value.length;

    // Update the readonly textbox with the remaining characters
    limitCount.value = `You have ${remainingChars} characters left.`;
}
