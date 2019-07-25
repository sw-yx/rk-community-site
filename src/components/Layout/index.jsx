import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Footer from '../Footer';
import s from './s.module.scss';

export default props => {
  const {
    children,
    title,
    description,
    image,
    url,
    titleTemplate,
    twitter,
    footerLinks,
    coverImage,
  } = props;
  const fullImageUrl = coverImage ? `${url}${coverImage}` : `${url}${image}`;
  const usedTitle = titleTemplate ? titleTemplate.replace('%s', title) : title;
  return (
    <div className={s.layout}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{usedTitle}</title>
        <link rel="canonical" href={url} />
        <meta property="og:title" content={usedTitle} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="twitter:image" content={fullImageUrl} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content={`@${twitter}`}></meta>
      </Helmet>
      <header>
        <h1>
          <svg
            className={s.logo}
            viewBox="0 0 483 494"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M482.318 423.637a207.42 207.42 0 0 0-1.092-2.091l-40.96-56.613V19.6c0-14.138-5.461-19.6-19.6-19.6h-358.4c-14.138 0-19.6 5.461-19.6 19.6v345.333l-40.96 56.613a9.43 9.43 0 0 0-.614 1.169 9.353 9.353 0 0 0-.478.922A8.372 8.372 0 0 0 0 426.666v30.667a8.533 8.533 0 0 0 8.533 8.533h31.133v8.533c0 14.138 8.461 19.6 22.6 19.6h358.4c14.138 0 22.6-5.461 22.6-19.6v-8.533h31.133a8.533 8.533 0 0 0 8.533-8.533v-30.667a8.355 8.355 0 0 0-.614-3.029zM53.733 19.6a8.533 8.533 0 0 1 8.533-8.533h358.4a8.533 8.533 0 0 1 8.533 8.533v328.575l-17.067-24.75V53.733c0-14.138-11.462-25.6-25.6-25.6H96.399c-14.138 0-25.6 11.461-25.6 25.6v269.692l-17.067 24.75.001-328.575zm90.866 280.388c16.643-4.297 24.494-14.299 22.328-31.35-2.166-17.051-10.673-23.832-27.861-23.832-17.188 0-25.695 6.781-27.861 23.832-2.166 17.051 5.685 27.053 22.328 31.35v15.745H81.866v-262c0-4.713 9.82-14.533 14.533-14.533h290.133c4.713 0 14.533 9.82 14.533 14.533v262H144.599v-15.745zm-5.533-9.855c-9.426 0-17.067-7.641-17.067-17.067S129.64 256 139.066 256s17.067 7.641 17.067 17.067-7.641 17.066-17.067 17.066zM83.599 326.8h49.933v25.667h-11.533c-4.713 0-8.533.82-8.533 5.533s3.82 5.533 8.533 5.533h34.133c4.713 0 8.533-.82 8.533-5.533s-3.82-5.533-8.533-5.533h-11.533V326.8h254.733l32.334 45.166L464 417.133l-444.401 1 64-91.333zm348.6 147.6c0 4.713-6.82 8.533-11.533 8.533h-358.4c-4.713 0-11.533-3.82-11.533-8.533v-8.533H432.2v8.533h-.001zm39.667-19.6h-460.8v-25.6h460.8v25.6z"
              fill="#000"
            />
            <path
              d="M249.999 346.867c-24.328 0-39.667 8.008-39.667 22.6v17.067c0 4.713.82 8.533 5.533 8.533 3.448-.003 3.556-8.08 4.876-11.265 16.801 7.02 41.713 7.02 58.514 0 1.564 3.752 2.557 11.879 6.543 11.085 3.986-.794 3.859-4.289 3.867-8.354v-17.067c.001-14.591-15.337-22.599-39.666-22.599zm0 32.133c-16.52 0-28.6-4.566-28.6-10.533s12.079-11.533 28.6-11.533 28.6 5.566 28.6 11.533S266.52 379 249.999 379zM349.999 346.867c-24.328 0-39.667 8.008-39.667 22.6v17.067c0 4.713.82 8.533 5.533 8.533 3.448-.003 3.556-8.08 4.876-11.265 16.801 7.02 41.713 7.02 58.514 0 1.564 3.752 2.557 11.879 6.543 11.085 3.986-.794 3.859-4.289 3.867-8.354v-17.067c.001-14.591-15.337-22.599-39.666-22.599zm0 32.133c-16.52 0-28.6-4.566-28.6-10.533s12.079-11.533 28.6-11.533 28.6 5.566 28.6 11.533S366.52 379 349.999 379zM273.599 258.533h-19.067V250c0-4.713-1.82-8.533-4.533-8.533s-4.533 3.82-4.533 8.533v8.533h-19.067c-4.713 0-4.533 3.821-4.533 8.533v9.067c0 4.713-.18 8.533 4.533 8.533s4.533-3.82 4.533-8.533V267.6h38.134v8.533c0 4.713-.18 8.533 4.533 8.533s4.533-3.82 4.533-8.533v-9.067c.001-4.712.18-8.533-4.533-8.533zM249.999 222.4c4.713 0 4.533-1.82 4.533-6.533v-8.533c0-4.713.18-6.533-4.533-6.533s-4.533 1.82-4.533 6.532v8.533c0 4.714-.18 6.534 4.533 6.534zM131.926 172.84c-2.844-6.297-17.723-13.051-23.969-18.18 9.293-6.246 23.309-15.488 32.348-19.805l-4.571-10.511c-1.879.558-3.097 1.269-4.773 2.133-7.516 3.91-25.594 15.437-34.836 21.988-.71 3.808-1.422 7.668-2.133 11.476 1.168.914 19.551 12.442 23.613 16.454 2.083 1.929 4.215 4.265 5.079 6.093 3.097-3.199 6.144-6.449 9.242-9.648zm45.855-20.668c9.242-1.524 16.25-7.922 18.535-19.297.305-1.473.457-2.945.457-4.418 0-2.945-.609-5.738-1.828-7.769-4.672-7.77-15.742-8.176-28.437-8.176-3.098 0-9.039.558-11.223.761-.406 3.149-.812 5.586-1.473 9.039-3.757 19.247-7.464 38.442-11.222 57.688h12.34l5.484-28.336c2.082.914 3.91 1.27 5.688 1.422 1.878 4.875 7.718 18.434 11.578 23.969 1.32 2.183 3.859 4.722 6.703 5.179 2.59-3.199 5.23-6.347 7.82-9.546-2.031-.559-4.113-2.387-4.875-3.2-2.183-3.351-6.805-11.019-9.547-17.316zm5.028-18.18c-1.016 5.18-3.25 9.141-11.883 9.141h-.406c-2.184 0-5.028-.762-8.024-2.133 1.168-5.992 2.336-12.035 3.504-18.027 1.473-.051 1.879-.051 3.199-.051 8.684 0 13.914 1.879 13.914 8.226 0 .864-.101 1.778-.304 2.844zm45.246 8.328c3.757-3.758 15.945-16.351 26.507-23.207l-8.226-8.988c-2.234 1.879-21.887 18.281-28.539 25.645 1.523-7.872 3.047-15.692 4.57-23.563h-13.101c-4.418 22.699-8.786 45.348-13.204 68.047h13.102c1.473-7.516 2.945-15.082 4.418-22.598 2.234-3.656 5.688-6.804 5.688-6.804 5.332 6.55 13.66 25.136 14.878 30.773 3.961-1.473 7.922-2.895 11.883-4.367-1.219-7.008-13.051-28.895-17.976-34.938zM284.34 181.93c3.25 1.879 6.551 3.758 9.801 5.636 8.886-14.32 36.968-59.363 47.429-77.238l-9.75-5.484c-10.359 18.078-38.238 63.019-47.48 77.086zm54.996-10.36c2.184 3.606 4.418 7.16 6.602 10.766 1.574-1.828 4.621-4.164 7.414-6.094 5.586-4.012 28.539-15.539 30.011-16.453.305-3.402.66-6.754.965-10.156-6.703-6.551-20.262-18.078-26.305-21.988-1.371-.864-2.234-1.575-3.91-2.133-2.437 3.047-4.824 6.144-7.261 9.191 7.312 4.317 16.757 12.848 23.613 19.094-8.277 5.129-25.848 11.476-31.129 17.773z"
              fill="#000"
            />
          </svg>
          <Link to="/">React Knowledgeable</Link>
        </h1>
        <p>
          React Knowledgeable, nicknamed <code>&lt;RK /&gt;</code>, is a fun and
          friendly podium to share what we learn about React.
        </p>
      </header>
      {children}
      <Footer footerLinks={footerLinks} />
    </div>
  );
};
