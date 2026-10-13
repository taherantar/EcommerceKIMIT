import db from "./database/db.json";

const KEY = "kimit-product-edits";

const readEdits = () => {
    try {
        return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch {
        return {};
    }
};

export const getProducts = () => {
    const edits = readEdits();
    return db.products.map((p) => ({ ...p, ...edits[p.id] }));
};

export const getProduct = (id) => getProducts().find((p) => String(p.id) === String(id)) || {};

export const getCategories = () => db.category;

// Edits are saved in the visitor's browser (localStorage), no server needed.
export const saveProductEdit = (id, changes) => {
    try {
        const edits = readEdits();
        edits[id] = { ...edits[id], ...changes };
        localStorage.setItem(KEY, JSON.stringify(edits));
    } catch {
        /* storage unavailable: ignore */
    }
};
