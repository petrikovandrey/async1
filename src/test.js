import * as index from "../src/index.js";

test(" load ", async () => {
    const o = await index.GameSavingLoader.load();
    expect(o).toEquel({});
})

