import React from 'react';
import { render, screen } from '@testing-library/react';
// @ts-ignore
import { snapshotDiff } from 'snapshot-diff';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders inline difference with snapshotDiff and toMatchInlineSnapshot', () => {
  expect(snapshotDiff(<App />, <App flag={true} />)).toMatchInlineSnapshot(`
"Snapshot Diff:
- <App />
+ <App flag={true} />

@@ -8,15 +8,11 @@
        alt=\\"logo\\"
        className=\\"App-logo\\"
        src=\\"logo.svg\\"
      />
      <p>
-       Edit 
-       <code>
-         src/App.tsx
-       </code>
-        and save to reload.
+       Flag!
      </p>
      <a
        className=\\"App-link\\"
        href=\\"https://reactjs.org\\"
        rel=\\"noopener noreferrer\\""
`);
 });

test('renders inline difference with toMatchInlineDiffSnapshot', () => {
  expect(<App />).toMatchInlineDiffSnapshot(<App flag={true} />, `
"Snapshot Diff:
- <App />
+ <App flag={true} />

@@ -8,15 +8,11 @@
        alt=\\"logo\\"
        className=\\"App-logo\\"
        src=\\"logo.svg\\"
      />
      <p>
-       Edit 
-       <code>
-         src/App.tsx
-       </code>
-        and save to reload.
+       Flag!
      </p>
      <a
        className=\\"App-link\\"
        href=\\"https://reactjs.org\\"
        rel=\\"noopener noreferrer\\""
`)
});

test('renders inline difference with toMatchInlineDiffSnapshot with options', () => {
  expect(<App />).toMatchInlineDiffSnapshot(<App flag={true} />, { stablePatchmarks: true }, `
"Snapshot Diff:
- <App />
+ <App flag={true} />

@@ --- --- @@
        alt=\\"logo\\"
        className=\\"App-logo\\"
        src=\\"logo.svg\\"
      />
      <p>
-       Edit 
-       <code>
-         src/App.tsx
-       </code>
-        and save to reload.
+       Flag!
      </p>
      <a
        className=\\"App-link\\"
        href=\\"https://reactjs.org\\"
        rel=\\"noopener noreferrer\\""
`);
});
