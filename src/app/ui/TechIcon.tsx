import { tech } from "../enum/tech";
import Image from "next/image";
export default function TechIcon({ techProp }: { techProp: tech }) {
    const factoryTech = () => {
        switch (techProp) {
            case tech.java:
                return ( 
                    <Image width={25} height={25} alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"/>          
                );
            case tech.bash:
                return(
                    <Image width={25} height={25} alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"/>          
                )
            case tech.python:
                return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" /><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z" /><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8" /><stop offset="1" stopColor="#366994" /></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052" /><stop offset="1" stopColor="#FFC331" /></linearGradient></defs></svg>)
            case tech.numpy:
                return (<svg viewBox="-9 0 274 274" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M191.54779,186.292389 L191.607285,246.81213 L137.903038,273.611369 L137.903038,213.11807 L191.54779,186.292389 Z M256.000818,153.946885 L256.000818,214.678164 L210.196199,237.537504 L210.163146,177.083869 L256.000818,153.946885 Z M191.468463,105.286501 L191.527958,165.171627 L137.903038,191.818823 L137.903038,131.913865 L191.468463,105.286501 Z M256.000818,73.2054191 L256.000818,132.713743 L210.149925,156.022603 L210.110262,96.0184858 L256.000818,73.2054191 Z M129.738988,66.1651652 L177.67221,90.3598405 L127.940914,115.334563 L80.9133402,91.7150067 L129.738988,66.1651652 Z M63.0648093,32.5107686 L108.783491,55.588258 L59.8454631,81.1314889 L12.8906057,57.5515964 L63.0648093,32.5107686 Z M193.755719,32.8611286 L242.997833,57.5515964 L198.958235,79.6705536 L150.925855,55.4428255 L193.755719,32.8611286 Z M128.231779,3.55271368e-15 L172.562241,22.2247263 L130.056295,44.9188028 L84.3772773,21.8809768 L128.231779,3.55271368e-15 Z" fill="#4DABCF"> </path> <path d="M118.943932,131.913865 L82.7709095,113.728195 L82.7709095,192.334447 C82.7709095,192.334447 38.5329951,98.2065835 34.4344436,89.7516683 C33.9055982,88.6609247 31.7307216,87.4644121 31.175434,87.1735472 C23.2427536,83.0088899 0,71.2354701 0,71.2354701 L0,210.110262 L32.1537979,227.297736 L32.1537979,154.7071 C32.1537979,154.7071 75.9223621,238.813344 76.3652701,239.732213 C76.8081781,240.651081 81.2042052,249.515852 85.8977077,252.629429 C92.1513041,256.767644 118.950543,272.884206 118.950543,272.884206 L118.943932,131.913865 Z" fill="#4D77CF"> </path> </g> </g></svg>)
            case tech.pandas:
                return (
                    <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pandas</title> <path d="M11.849 2.813h3.269v6.787h-3.268zM11.849 16.755h3.269v6.789h-3.268zM11.849 11.582h3.269v3.203h-3.268zM6.598 8.393h3.268v22.563h-3.269zM16.992 22.356h3.269v6.787h-3.269zM16.992 8.401h3.269v6.787h-3.269zM16.992 17.171h3.269v3.203h-3.269zM22.134 1.045h3.269v22.563h-3.269z"></path> </g></svg>
                )
            case tech.colabs:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg"   style={{pointerEvents:'none',display:'block',width:'100%',height:'100%'}} viewBox="0 0 24 24"><path fill="#E8710A" d="M4.54 9.46 2.19 7.1a6.93 6.93 0 0 0 0 9.79l2.36-2.36a3.59 3.59 0 0 1-.01-5.07Z" /><path fill="#F9AB00" d="m2.19 7.1 2.35 2.36a3.59 3.59 0 0 1 5.08 0l1.71-2.93-.1-.08a6.93 6.93 0 0 0-9.04.65ZM11.34 17.46l-1.72-2.92a3.59 3.59 0 0 1-5.08 0L2.19 16.9a6.93 6.93 0 0 0 9 .65l.11-.09M12 7.1a6.93 6.93 0 0 0 0 9.79l2.36-2.36a3.59 3.59 0 1 1 5.08-5.08l2.37-2.35a6.93 6.93 0 0 0-9.81 0Z" /><path fill="#E8710A" d="m21.81 7.1-2.35 2.36a3.59 3.59 0 0 1-5.08 5.08L12 16.9a6.93 6.93 0 0 0 9.81-9.8Z" /></svg>
                )
            case tech.php:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 100 50"><path fill="#fff" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053" /></svg>
                )
            case tech.html:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                        <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
                        <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
                    </svg>
                )
            case tech.css:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                        <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                        <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                        <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" />
                        <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" />
                    </svg>
                )
            case tech.javascript:
                return (

                    <Image width={25} height={25} alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />          
          
                )
            case tech.typescript:
                return (
                    <svg viewBox="0 0 256 256"   xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" /></svg>
                )
            case tech.node:
                return (<svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" ><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stopColor="#41873F" /><stop offset="32.88%" stopColor="#418B3D" /><stop offset="63.52%" stopColor="#419637" /><stop offset="93.19%" stopColor="#3FA92D" /><stop offset="100%" stopColor="#3FAE2A" /></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stopColor="#41873F" /><stop offset="40.32%" stopColor="#54A044" /><stop offset="71.36%" stopColor="#66B848" /><stop offset="90.81%" stopColor="#6CC04A" /></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stopColor="#6CC04A" /><stop offset="28.64%" stopColor="#66B848" /><stop offset="59.68%" stopColor="#54A044" /><stop offset="86.24%" stopColor="#41873F" /></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><mask id="d" fill="#fff"><use xlinkHref="#b" /></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)" /><mask id="g" fill="#fff"><use xlinkHref="#e" /></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)" /></svg>)
            case tech.bootstrap:
                return (<svg viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z" /></svg>)
            case tech.tailwind:
                return (
                    <svg viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <defs>
                            <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
                                <stop stopColor="#2298BD" offset="0%"></stop>
                                <stop stopColor="#0ED7B5" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path>
                    </svg>
                )
            case tech.react:
                return (<svg viewBox="0 0 256 228"   xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF" /></svg>)
            case tech.nextjs:
                return (<svg viewBox="0 0 256 228"   xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF" /></svg>)
            case tech.electron:
                return (<svg   viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_408_139" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0"  >
                        <circle cx="90" cy="90" r="90" fill="black" />
                    </mask>
                    <g mask="url(#mask0_408_139)">
                        <circle cx="90" cy="90" r="87" fill="black" stroke="white" />
                        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)" />
                        <rect x="115" y="54"   fill="url(#paint1_linear_408_139)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                )
            case tech.spreadsheets:
                return (<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#12B347" d="M456.348,495.304c0,9.217-7.479,16.696-16.696,16.696H72.348c-9.217,0-16.696-7.479-16.696-16.696 V16.696C55.652,7.479,63.131,0,72.348,0h233.739c4.424,0,8.674,1.761,11.804,4.892l133.565,133.565 c3.131,3.13,4.892,7.379,4.892,11.804V495.304z"></path> <path fill="#0F993E" d="M456.348,495.304V150.278c0-4.437-1.766-8.691-4.909-11.822L317.389,4.871 C314.258,1.752,310.019,0,305.601,0H256v512h183.652C448.873,512,456.348,504.525,456.348,495.304z"></path> <path fill="#12B347" d="M451.459,138.459L317.891,4.892C314.76,1.76,310.511,0,306.082,0h-16.691l0.001,150.261 c0,9.22,7.475,16.696,16.696,16.696h150.26v-16.696C456.348,145.834,454.589,141.589,451.459,138.459z"></path> <path fill="#FFFFFF" d="M372.87,211.478H139.13c-9.217,0-16.696,7.479-16.696,16.696v200.348 c0,9.217,7.479,16.696,16.696,16.696H372.87c9.217,0,16.696-7.479,16.696-16.696V228.174 C389.565,218.957,382.087,211.478,372.87,211.478z M155.826,311.652h66.783v33.391h-66.783V311.652z M256,311.652h100.174v33.391 H256V311.652z M356.174,278.261H256V244.87h100.174V278.261z M222.609,244.87v33.391h-66.783V244.87H222.609z M155.826,378.435 h66.783v33.391h-66.783V378.435z M256,411.826v-33.391h100.174v33.391H256z"></path> <path fill="#E6F3FF" d="M372.87,211.478H256v33.391h100.174v33.391H256v33.391h100.174v33.391H256v33.391h100.174v33.391H256 v33.391h116.87c9.22,0,16.696-7.475,16.696-16.696V228.174C389.565,218.953,382.09,211.478,372.87,211.478z"></path> </g></svg>)
            case tech.gsuite:
                return (<svg   viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>)
            case tech.appscript:
                return (
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  >
                        <rect fill="#ea4335" x="27.53" y="328.9"   rx="53.5" />
                        <rect fill="#fbbc04" x="53.33" y="250.94"   rx="53.5" transform="translate(254.91 691.72) rotate(-144)" />
                        <rect fill="#34a853" x="120.53" y="201.9"   rx="53.5" transform="translate(455.05 -115.53) rotate(72)" />
                        <rect fill="#4285f4" x="202.53" y="201.9"   rx="53.5" transform="translate(25.92 546.46) rotate(-72)" />
                        <g fill="#fff">
                            <circle cx="265.84" cy="129.28" r="26.7" />
                            <circle cx="131.44" cy="225.44" r="26.7" />
                            <circle cx="81.36" cy="382.6" r="26.7" />
                            <circle cx="348.22" cy="381.64" r="26.7" />
                            <circle cx="430.67" cy="127.89" r="26.7" />
                        </g>
                    </svg>
                )
            case tech.mysql:
                return (<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
                    <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" />
                    <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" />
                </svg>
                )
            case tech.postgres:
                return (<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264">
                    <path d="M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26" />
                    <path d="M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13" fill="#336791" />
                    <path d="M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3" fill="#FFF" />
                    <path d="M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z" fill="#FFF" />
                </svg>
                )
            case tech.sqlite:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 512 228">
                        <defs>
                            <linearGradient x1="57.7%" y1="2%" x2="57.7%" y2="94.4%" id="a">
                                <stop stopColor="#97D9F6" offset="0%" />
                                <stop stopColor="#0F80CC" offset="92%" />
                                <stop stopColor="#0F80CC" offset="100%" />
                            </linearGradient>
                        </defs>
                        <path d="M194.5 112c-6.8 0-12.3 2-16.6 6.1-4.3 4-6.4 9.3-6.4 15.8a23.3 23.3 0 0 0 6.5 17c2.2 2.4 6.6 5.6 13.2 9.7 8 5 13.4 9 16 12 2.5 3.2 3.7 6.4 3.7 9.9 0 4.5-1.5 8.2-4.6 11a18 18 0 0 1-12.4 4 20.1 20.1 0 0 1-20.3-20.8h-2.5v22.9h2.5c.8-2.2 1.8-3.3 3.2-3.3.7 0 2.3.4 4.7 1.3 6 2.1 10.9 3.2 14.7 3.2a23 23 0 0 0 17-7 23.2 23.2 0 0 0 2.4-30.8c-3-4-9-8.6-18-14a59.5 59.5 0 0 1-15-11.3c-2.3-3-3.5-6.1-3.5-9.7 0-3.8 1.5-7 4.2-9.2 2.8-2.3 6.5-3.5 11-3.5 5.2 0 9.5 1.5 12.9 4.6 3.3 3 5.3 7.4 5.9 12.8h2.5V113h-2.3a6 6 0 0 1-.8 2c-.3.3-.7.4-1.4.4a17 17 0 0 1-4.3-1 38.6 38.6 0 0 0-12.3-2.3Zm82.4 0a44.6 44.6 0 0 0-39 22.2 43.5 43.5 0 0 0 4.5 50.2c7 8.2 15.3 13.3 25 15.3 2.1 1.1 5.3 4.1 9.4 9 4.7 5.3 8.6 9.3 11.9 11.6A35.6 35.6 0 0 0 311 227c5.3 0 10-.9 14-2.7l-.9-2.3a20.1 20.1 0 0 1-18.7-2.3c-3.6-2.5-8.3-7.1-13.8-14a47.6 47.6 0 0 0-5.4-6.1c10.6-2 19.3-7.2 26-15.4a42.8 42.8 0 0 0 10.2-28 42 42 0 0 0-13.2-31.4 44.8 44.8 0 0 0-32.4-12.9Zm51.4 0 .1 2.7c5.5 0 8.6 1.7 9.3 5 .3 1.1.4 3.3.4 6.4v59.6c0 4.5-.7 7.3-2 8.6-1.1 1.2-3.2 2-6.2 2.3l-.1 2.6h55.1l1.4-13.5h-2.5c-.7 3.7-2.3 6.3-5 7.8a30.5 30.5 0 0 1-14 2.3h-5.2c-6 0-9.5-2.2-10.5-6.6-.2-.9-.2-1.8-.2-2.8l.2-60.3c0-4.4.5-7.4 1.7-8.9 1.2-1.4 3.3-2.3 6.4-2.5l-.2-2.7h-28.7Zm-50.6 3.3a28 28 0 0 1 23 11.2 48 48 0 0 1 8.8 30.5c0 12.3-3 22.1-8.9 29.5a29 29 0 0 1-23.7 11c-9.5 0-17.2-3.8-23-11.4a47.1 47.1 0 0 1-8.9-29.6c0-12.5 3-22.5 9-30 5.9-7.5 13.8-11.2 23.7-11.2Zm126.9 12.8c-1.3 0-2.4.5-3.1 1.4-.8 1-1 2-.8 3.4a6 6 0 0 0 2.2 3.4c1.1 1 2.4 1.4 3.7 1.4 1.3 0 2.3-.5 3-1.4.7-1 1-2.1.7-3.4-.3-1.4-1-2.5-2-3.4a5.6 5.6 0 0 0-3.7-1.4Zm36.4 9.2c-2.3 8.8-7.3 13.5-14.9 14.3l.1 2.5h8.9l-.2 29.8c0 5.1.2 8.5.5 10.2 1 4.2 3.6 6.3 8.1 6.3 6.6 0 13.4-4 20.6-12l-2.2-1.8c-5.2 5.2-9.7 7.8-13.7 7.8-2.5 0-4-1.4-4.6-4.2l-.2-2.4v-33.7h13.7l-.2-4h-13.4v-12.8H441Zm52.4 11.2c-7.6 0-13.7 3.7-18.5 11a31.3 31.3 0 0 0-4.4 24.4 21 21 0 0 0 6.7 12.2 19 19 0 0 0 12.7 4.3c4.7 0 11.4-1.2 14.1-3.7 2.8-2.4 5.4-6.3 7.8-11.7l-2-2a20.6 20.6 0 0 1-17.1 10.5c-8 0-12.8-4.3-14.6-13l-.5-3.5a46 46 0 0 0 21.4-8c4.8-3.8 9.6-7.9 8.7-12.1a9.9 9.9 0 0 0-3.9-6c-2-1.6-7.4-2.4-10.4-2.4Zm-83 .3-16.3 3.8v2.9l5.7-.7c2.7 0 4.3 1.2 4.8 3.7.2.8.3 2 .4 3.4l-.2 26.8c0 3.7-.5 5.8-1.3 6.5-.8.6-3 1-6.6 1v2.5h25.9v-2.5c-3.7 0-6-.3-7-.9-1-.5-1.8-1.5-2.1-3-.2-1.2-.3-3.1-.4-5.7l.1-37.8h-3Zm78.9 5c1.6 0 3 .6 4.6 1.8a7 7 0 0 1 2.8 4c1.4 7-4.9 12-19 14.7a25 25 0 0 1 2.7-14.1c2.3-4.3 5.3-6.4 8.9-6.4Z" fill="#003B57" />
                        <path d="M157.9 10H17C7.7 10 0 17.7 0 27v155.2c0 9.4 7.7 17.2 17.1 17.2h92.7c-1-46.2 14.7-135.7 48-189.5Z" fill="#0F80CC" />
                        <path d="M152.8 15H17C10.5 15 5 20.4 5 27V171c30.7-11.8 76.8-22 108.7-21.5a989.7 989.7 0 0 1 39-134.5Z" fill="url(#a)" />
                        <path d="M190.7 4.9c-9.6-8.6-21.3-5.2-32.8 5a81.4 81.4 0 0 0-5.1 5c-19.7 21-38 59.7-43.7 89.2a81.5 81.5 0 0 1 5.8 17.7l.8 3.5-.9-2.8a173.8 173.8 0 0 0-.8-2 172 172 0 0 0-6.4-12.1l-3.5 11c4.5 8.2 7.3 22.4 7.3 22.4l-1.4-4.1c-1-2.9-6-11.7-7.2-13.7-2 7.5-2.8 12.6-2.1 13.8 1.4 2.4 2.7 6.5 4 11a257.6 257.6 0 0 1 4.6 25c-.3 8.6-.1 17.6.5 25.7a91 91 0 0 0 4.7 24.8l1.5-.8a111 111 0 0 1-3.9-37c.9-22.5 6-49.5 15.6-77.7 16-42.5 38.4-76.6 58.8-93-18.6 17-43.8 71.4-51.4 91.6a365.7 365.7 0 0 0-18 64c6.2-19 26.4-27.2 26.4-27.2s9.8-12.2 21.4-29.6a210 210 0 0 0-22.1 6l-7.1 3s18.1-11 33.7-16C191 73.8 214.2 25.9 190.7 4.9" fill="#003B57" />
                    </svg>

                )
        }
    }

    return (
        <div style={{width: 25, height: 25}}>
            {factoryTech()}
        </div>
    )
}