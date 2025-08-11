/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/servios',
        destination: '/',
        permanent: true,
      },
      {
        source: '/catlogo',
        destination: '/',
        permanent: true,
      },
         {
        source: '/sobre',
        destination: '/a-pousada',
        permanent: true,
      },
         {
        source: '/perguntas-frequentes',
        destination: '/',
        permanent: true,
      },
         {
        source: '/contato',
        destination: '/contato',
        permanent: true,
      },
        {
        source: '/depoimentos',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
