
interface MailIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MailIcon: React.FC<MailIconProps> = ({ 
  size, 
  width = 24, 
  height = 24, 
  ...props 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="icon icon-tabler icon-tabler-mail-forward" 
      width={size || width} 
      height={size || height} 
      viewBox="0 0 24 24" 
      strokeWidth="2"          /* Convertido a camelCase */
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round"    /* Convertido a camelCase */
      strokeLinejoin="round"   /* Convertido a camelCase */
      {...props}               /* Reemplaza a {...Astro.props} */
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
      <path d="M3 6l9 6l9 -6" />
      <path d="M15 18h6" />
      <path d="M18 15l3 3l-3 3" />
    </svg>
  );
};

export default MailIcon;