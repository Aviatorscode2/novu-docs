import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/docs/api-reference';

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith('index.mdx') && !v.endsWith('meta.json') && !v.endsWith('overview.mdx');
  },
});

void OpenAPI.generateFiles({
  // input files
  input: ['./openapi.json'],
  output: out,
  groupBy: 'tag',
  per: 'operation',
});
