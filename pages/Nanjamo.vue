<template>
  <div>
    <h1>ファイルアップロード</h1>
    <form>
      <label for="file">File: </label>
      <input type="file" name="file" @change="onChange" />
    </form>
    <ul>
      <li><img src="/nuxt3-file-upload.png" style="width: 200px" /></li>
    </ul>
  </div>
</template>
<script setup>
const onChange = async (e) => {
  const files = e.target.files;
  const formData = new FormData();
  formData.append('file', files[0]);
  await useFetch('/api/upload', {
    method: 'post',
    body: formData,
  });
};
</script>