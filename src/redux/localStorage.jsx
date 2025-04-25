export const saveState = (state) => {
    try {
        localStorage.setItem("todos", JSON.stringify(state)); // Save the whole state
    } catch (error) {
        console.error("Error saving state to LocalStorage:", error);
    }
};

export const loadState = () => {
    try {
        const savedState = localStorage.getItem("todos");
        return savedState ? JSON.parse(savedState) : undefined; // Return the parsed state directly
    } catch (error) {
        console.error("Error loading state from LocalStorage:", error);
        return undefined;
    }
};