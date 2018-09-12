from setuptools import setup

setup(
	name = 'clearCutter',
	packages=['clearCutter'],
	include_package_data=True,
	install_requires=[
		'flask',
		'numpy',
		'Pillow',
		'matplotlib',
	],
)
