import EmbededView from 'shared/antd/embededView'

import configs from 'app/configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://app.uxd.fi/'}
      title="UXD: UXD is a decentralized stablecoin, backed 100% by delta neutral position."
      background={{ light: '#000000', dark: '#000000' }}
    />
  )
}

export default View
