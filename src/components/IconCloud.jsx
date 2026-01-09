import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { siPython, siReact, siJavascript, siNeo4j, siTypescript, siUdemy, siDocker, siKubernetes, siMongodb, siExpress, siVite, siGit, siGithub, siHtml5, siCss, siGooglegemini, siNodedotjs, siSupabase, siBootstrap, siPostgresql, siPostman } from 'simple-icons'; 

const cloudIcons = [siPython, siReact, siJavascript, siNeo4j, siTypescript, siUdemy, siDocker, siKubernetes, siMongodb, siExpress, siVite, siGit, siGithub, siHtml5, siCss, siGooglegemini, siNodedotjs, siSupabase, siBootstrap, siPostgresql, siPostman];



const IconCloud = () => {
    const icons = [...cloudIcons].map((icon) => {
        return renderSimpleIcon({
            minContrastRatio: 21,
            fallbackHex: '#000', //'#000' o #fff
            icon,
            size: 72,
            aProps: {
                onClick: (e) => e.preventDefault()
            }
        })
    });

    return (<>
        <Cloud options={{
            activeAudio: false,
            outlineMethod: 'none',
            pinchZoom: false,
            wheelZoom: false,
            initial: [0.1, 0.1],
            minSpeed: 0.01,
            clickToFront: 500,
            reverse: true,
        }}
            containerProps={{
                className: 'icon-cloud'
            }}
        >
            {icons}
        </Cloud>
    </>);
};

export default IconCloud;
