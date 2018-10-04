// @flow
export default class Blocker {
  isBlock: boolean = false

  block(blockInMs: number = 3000) {
    if (this.isBlock) return false;
    this.isBlock = true;
    setTimeout(() => { this.isBlock = false; }, blockInMs);
    return true;
  }
}
