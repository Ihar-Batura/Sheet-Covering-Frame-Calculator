function cleanResultContainer(): void {
  const resultContent: HTMLElement | null = document.querySelector('.result-container');

  if (resultContent !== null) {
    while (resultContent.firstChild) {
      resultContent.removeChild(resultContent.firstChild);
    }
  }
}

export default cleanResultContainer;
