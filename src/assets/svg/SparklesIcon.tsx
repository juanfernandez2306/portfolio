// Definimos las propiedades que aceptará el icono, extendiendo las nativas de un <svg>
// Esto te permitirá pasarle className, size, u otros atributos desde el contenedor.
interface SparklesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string; 
}

const SparklesIcon: React.FC<SparklesIconProps> = ({ 
  size, 
  width = 16,     /* Valor por defecto si no se pasa width o size */
  height = 16,    /* Valor por defecto si no se pasa height o size */
  ...props         /* Propagamos el resto de atributos nativos (className, etc.) */
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16" 
      // Si se proporciona 'size', lo usamos para ancho y alto; si no, usamos 'width'/'height' individuales
      width={size || width} 
      height={size || height} 
      fill="none" 
      // Al propagar 'props' al final, permitimos sobrescribir atributos por defecto (como fill="none")
      // Esta línea es el equivalente exacto a {...Astro.props} en Astro
      {...props} 
    >
      <path 
        d="M8 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 1Zm3 1.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h2ZM2.5 5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5A.5.5 0 0 1 2.5 5Zm10 0a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5-.5Zm-10 6a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5Zm10 0a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1-.5-.5ZM7.5 14.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z" 
        // Importante: currentColor hace que el icono adopte el color del texto del contenedor donde lo uses
        fill="currentColor" 
      />
      <path 
        d="M8.333 1.635a1 1 0 0 0-1.666 0l-1.03 1.83a1 1 0 0 1-.527.427L3.38 4.24a1 1 0 0 0-.5 1.564l1.241 1.631a1 1 0 0 1 .184.629L3.921 9.94a1 1 0 0 0 1.25 1.25l1.876-.385a1 1 0 0 1 .629.184l1.631 1.241a1 1 0 0 0 1.564-.5l.348-1.73a1 1 0 0 1 .427-.528l1.83-1.03a1 1 0 0 0 0-1.666l-1.83-1.03a1 1 0 0 1-.427-.527l-.348-1.731a1 1 0 0 0-1.064-.816Zm1.43 1.848a2 2 0 0 1 .854 1.056l.348 1.73a2 2 0 0 0 .854 1.056l1.83 1.03a2 2 0 0 1 0 3.332l-1.83 1.03a2 2 0 0 0-.854 1.056l-.348 1.73a2 2 0 0 1-3.128 1.0l-1.631-1.241a2 2 0 0 0-1.257-.369l-1.877.385a2 2 0 0 1-2.5-2.5l.385-1.876a2 2 0 0 0-.369-1.257L1.137 7.036a2 2 0 0 1 1.0-3.128l1.731-.348a2 2 0 0 0 1.056-.854l1.03-1.83a2 2 0 0 1 3.332 0l1.03 1.83a2 2 0 0 0 .447.538Z" 
        fill="currentColor"
        fillRule="evenodd"       /* Corregido a camelCase para JSX */
        clipRule="evenodd"       /* Corregido a camelCase para JSX */
      />
    </svg>
  );
};

export default SparklesIcon;