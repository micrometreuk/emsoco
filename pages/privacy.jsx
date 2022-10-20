import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import Privacy from "../components/Privacy";

const content = {
	animate: {
		transition: { staggerChildren: 0.1 },
	},
};

const title = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

const inputs = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};
export  default function ContactMotion() {
	return (
		<div >
			<Layout>
				<motion.section exit={{ opacity: 0 }}>
					<motion.div
						style={{ marginTop: "9rem" }}
						variants={content}
						animate="animate"
						initial="initial"
					>
						<motion.div variants={title}>
							<Privacy/>
						</motion.div>
					</motion.div>
				</motion.section>
			</Layout>
		</div>
	);
}

