import { test } from "node:test";
import assert from "node:assert/strict";
import { validMoods } from "../src/components/viz/SyllogismViz.tsx";

test("the syllogism checker finds exactly the traditional valid moods", () => {
  assert.deepEqual(validMoods(true).sort(), [
    "1AAA", "1AAI", "1AII", "1EAE", "1EAO", "1EIO", "2AEE", "2AEO", "2AOO", "2EAE", "2EAO", "2EIO",
    "3AAI", "3AII", "3EAO", "3EIO", "3IAI", "3OAO",
  ]);
  assert.equal(validMoods(false).length, 12);
  assert.ok(!validMoods(false).includes("3AAI"), "Darapti needs existential import");
});
