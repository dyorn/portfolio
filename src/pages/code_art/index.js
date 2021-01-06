import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Img from 'gatsby-image'
import CodeArtPreview from '../../components/CodeArtPreview'

const CodeArt = ({data}) => {
    return (
        <Layout>
            <SEO title="Code Art" />
            <div className="flex flex-wrap mt-10 justify-center items-center mb-10 max-w-6xl w-full mx-auto">
                
                <CodeArtPreview
                    slug="/code_art/unknown_lines"
                    title="Unknown Lines"
                    fluid={data.unknownLines.childImageSharp.fluid}
                    type="left"
                    description={
                        <p className="w-full text-sm md:text-md lg:text-lg font-thin font-manrope m-4">
                            Inspired by Joy Division's Unknown Pleasures album cover, I created this music visualizer using{' '}
                            <a
                                href="https://threejs.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                                three.js
                            </a>. The song featured is an unreleased track from my friend{' '}
                            <a
                                href="https://www.instagram.com/bmark347/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeBlue hover:text-themeRed duration-500"
                            >
                                Ben Mark
                            </a>
                            . I also released a{' '}
                            <a
                                href="https://www.youtube.com/watch?v=_yXQayoxJOg"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                                YouTube video{' '}
                            </a>
                            documenting my creation process.
                        </p>
                    }
                />

                <CodeArtPreview
                    slug="/code_art/an_average_packing"
                    title="An Average Packing"
                    fluid={data.averagePacking.childImageSharp.fluid}
                    type="right"
                    className="mt-12"
                    description={
                        <p className="w-full text-sm md:text-md lg:text-lg font-thin font-manrope m-4">
                            Combining my previous two generative works, this is a work with packed circles that take the average color of their neighbors, using the{' '}
                            <a
                                href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                            k-nearest neighbors algorithm
                            </a>
                            {' '}(In this case with k=7).
                        </p>
                    }
                 />

                <CodeArtPreview
                    slug="/code_art/thanksgiving_break"
                    title="Thanksgiving Break"
                    fluid={data.thanksgivingBreak.childImageSharp.fluid}
                    type="left"
                    className="mt-12"
                    description={
                        <p className="w-full text-sm md:text-md lg:text-lg font-thin font-manrope m-4">
                            Over Thanksgiving Break 2020, I created this visualizer using{' '}
                            <a
                                href="https://p5js.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                                p5.js
                            </a>. The song featured is an unreleased track from my friend{' '}
                            <a
                                href="https://www.instagram.com/bmark347/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeBlue hover:text-themeRed duration-500"
                            >
                                Ben Mark
                            </a>
                            . I also released a{' '}
                            <a
                                href="https://www.youtube.com/watch?v=_yXQayoxJOg"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                                YouTube video{' '}
                            </a>
                            documenting my creation process.
                        </p>
                    }
                />

                <CodeArtPreview
                    slug="/code_art/ghost_coast"
                    title="Ghost Coast"
                    fluid={data.ghostCoast.childImageSharp.fluid}
                    type="right"
                    className="mt-12"
                    description={
                        <p className="w-full text-sm md:text-md lg:text-lg font-thin font-manrope m-4">
                                Inspired by{' '}
                                <a
                                    href="https://opensource.glassanimals.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline text-themeBlue hover:text-themeRed duration-500"
                                >
                                    Glass Animal's
                                </a>{' '}
                                latest album{' '}
                                <a
                                    href="https://en.wikipedia.org/wiki/Dreamland_(Glass_Animals_album)"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline text-themeRed hover:text-themeBlue duration-500"
                                >
                                    Dreamland
                                </a>
                                , I decided to create a music visualizer for the song{' '}
                                <a
                                    href="https://www.youtube.com/watch?v=ejirGSd3Hws"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline text-themeBlue hover:text-themeRed duration-500"
                                >
                                    Space Ghost Coast to Coast{' '}
                                </a>
                                with GLSL and p5.js. This was my first
                                time using both, but I love the end result.
                                </p>
                    }
                 />

                 <CodeArtPreview
                    slug="/code_art/packed_circles"
                    title="PCK MTN"
                    fluid={data.circlePacking.childImageSharp.fluid}
                    type="left"
                    className="mt-12"
                    description={
                        <p className="w-full text-sm md:text-md lg:text-lg font-thin font-manrope m-4">
                            My first piece of generative art. Inspired by various posts on{' '}
                            <a
                                href="https://www.reddit.com/r/generative/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                                r/generative
                            </a>
                            {' '}and this{' '}
                            <a
                                href="https://editor.p5js.org/cah689/sketches/B1kCFI36b"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeBlue hover:text-themeRed duration-500"
                            >
                                example
                            </a>
                            {' '}by Daniel Shiffman (notably his use of target circles per frame). Color Palette comes from Childish Gambino's STN MTN mixtape. 
                        </p>
                    }
                />

                <CodeArtPreview
                    slug="/code_art/color_of_average"
                    title="Color of Average"
                    fluid={data.colorAverage.childImageSharp.fluid}
                    type="right"
                    className="mt-12"
                    description={
                        <p className="w-full text-sm md:text-md lg:text-lg font-thin font-manrope m-4">
                            My second generative art. Inspired by{' '}
                            <a
                                href="https://www.reddit.com/r/generative/comments/kbvau2/oc_each_clock_shows_average_time_of_its_neighbors/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline text-themeRed hover:text-themeBlue duration-500"
                            >
                                this post
                            </a>
                            {' '}on reddit, I created some sort of naturally changing gradient. It has a nice pastel look to it, and works with a handful of source points that rotate the colorwheel while the rest of the points take the average value of their neighbors.
                        </p>
                    }
                 />

            </div>
        </Layout>
    )
}

export default CodeArt

export const query = graphql`
    query CodeArtPreviews {
        ghostCoast: file(
            relativePath: { eq: "ghost_coast_preview.png" }
        ) {
            childImageSharp {
                fluid(traceSVG: { background: "#000000", color: "#0bbcd6" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        unknownLines: file(
            relativePath: { eq: "unknown_lines_preview.png" }
        ) {
            childImageSharp {
                fluid(traceSVG: { background: "#000000", color: "#0bbcd6" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        thanksgivingBreak: file(
            relativePath: { eq: "thanksgiving_break_preview.png" }
        ) {
            childImageSharp {
                fluid(traceSVG: { background: "#000000", color: "#0bbcd6" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        circlePacking: file(
            relativePath: { eq: "circle_packing_preview.png" }
        ) {
            childImageSharp {
                fluid(traceSVG: { background: "#000000", color: "#0bbcd6" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        colorAverage: file(
            relativePath: { eq: "color_of_average_preview.png" }
        ) {
            childImageSharp {
                fluid(traceSVG: { background: "#000000", color: "#0bbcd6" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        averagePacking: file(
            relativePath: { eq: "an_average_packing_preview.png" }
        ) {
            childImageSharp {
                fluid(traceSVG: { background: "#000000", color: "#0bbcd6" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`