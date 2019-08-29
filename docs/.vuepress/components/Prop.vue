<template>
  <div class="language-js prop">
    <div class="description">
      <h4>{{ name }}</h4>
      <p>{{ description }}</p>
    </div>
    <table>
      <tr>
        <td>
          <code>
            <span class="token keyword">@type</span>
          </code>
        </td>
        <td colspan="2">
          <code>
            {<span class="token variable">{{ type }}</span>}
          </code>
        </td>
      </tr>
      <tr v-if="returnType">
        <td>
          <code>
            <span class="token keyword">@return</span>
          </code>
        </td>
        <td>
          <code>
            {<span class="token variable">{{ returnType }}</span>}
          </code>
        </td>
      </tr>

      <tr v-if="parameters">
        <th colspan="3"><small>Function Parameters</small></th>
      </tr>

      <tr v-if="parameters" v-for="param in parameters">
        <td>
          <code>
            <span class="token keyword">@param</span>
          </code>
        </td>
        <td>
          <code>
            <span class="token variable">{{ param.name }}</span>
          </code>
        </td>
        <td>
          <code>
            <span class="token">{{ '{' + param.type + '}' }}</span>
          </code>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: '',
    type: '',
    returnType: '',
    description: '',
    parameters: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
  .prop {
    background: #282c34;
    color: #f0f0f1;
    margin-top: 3rem;
    padding: 1rem;
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
  }

  .prop::before {
    display: none;
  }

  .description {
    max-width: 60%;
    margin-right: 3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  table {
    border: none;

  }

  th,
  td,
  tr {
    border: none;
    background: none;
    padding: 0;
  }

  td {
    padding: 0 .25rem;
  }

  th {
    text-align: left;
    padding-top: 1rem;
  }

  table code {
    padding: 0;
  }
</style>
