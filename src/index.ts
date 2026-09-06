/**
 * 🎯 Get all values from an object or array and join them into a string.
 * @param {object | any[]} object ➡️ The object or array to get values from.
 * @param {string} type ➡️ type of transformation
 * @returns {string} 📤 The joined string of all values.
 */
const fn = (object: any, type = 'lowercase') => {
    const values = Object.values(object);
    if (values.length === 0) return '';
    let result = values.join(' ');
    switch (type) {
        case 'lowercase':
            result = result.toLowerCase();
            break;
        case 'uppercase':
            result = result.toUpperCase();
            break;
    }
    return result;
};
export default fn;
