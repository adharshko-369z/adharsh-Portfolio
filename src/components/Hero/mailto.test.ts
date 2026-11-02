import { describe, it, expect } from "vitest";
import { mailtoFor } from "./mailto";
import { profile } from "../../data/profile";

describe("mailtoFor", () => {
  it("starts with mailto: and your email", () => {
    expect(mailtoFor("Frontend Developer").startsWith(`mailto:${profile.email}`)).toBe(true)
  });

  it("puts the encoded role in the subject", () => {
    expect(mailtoFor("Jr Frontend Developer")).toContain("Jr%20Frontend%20Developer")
  });
});