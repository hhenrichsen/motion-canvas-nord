# `motion-canvas-nord`

This adds a code block color theme and some color constants that I frequently
use for [Motion Canvas](https://motion-canvas.github.io).

## Usage

```tsx
import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { CodeBlock } from '@motion-canvas/2d/lib/components/CodeBlock'
import { createRef } from '@motion-canvas/core/lib/utils';
import { Nord } from '@hhenrichsen/motion-canvas-nord';

export default makeScene2D(function* (view) {
    const code = createRef<CodeBlock>();
    view.add(<CodeBlock ref={code} theme={Nord.Theme} language={'python'} scale={0.3} code={`
def print_hello():
    print("Hello")

if __name__ == "__main__":
    print_hello()
    `}/>);
});
```
