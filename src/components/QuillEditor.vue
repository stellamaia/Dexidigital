<!-- <template>
    <div>
      <div ref="editor" />
    </div>
  </template>
  
  <script>
  import Quill from 'quill';
  
  export default {
    name: 'QuillEditor',
    props: ['content'],
    mounted() {
      this.initEditor();
    },
    methods: {
      initEditor() {
        this.quill = new Quill(this.$refs.editor, {
          theme: 'snow', // 'snow' for a classic WYSIWYG editor
          modules: {
            // Configurações e módulos adicionais do Quill
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'], // Opções da barra de ferramentas
              [{ header: 1 }, { header: 2 }], // Cabeçalhos
              [{ list: 'ordered' }, { list: 'bullet' }], // Listas ordenadas e não ordenadas
              ['link', 'image'], // Links e imagens
              ['clean'], // Limpar formatação
            ],
          },
        });
  
        // Defina o conteúdo do editor a partir das propriedades passadas
        this.quill.root.innerHTML = this.content;
  
        // Manipule os eventos de edição e atualize o conteúdo conforme necessário
        this.quill.on('text-change', () => {
          this.$emit('update:content', this.quill.root.innerHTML);
        });
      },
    },
  };
  </script>
  
  <style>
  /* Estilos opcionais do editor */
  .ql-editor {
    min-height: 200px;
  }
  </style>
   -->