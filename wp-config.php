<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          's^Vn3WOi`43w=IUv3o(oBAO!F<kt2E8B(5t7Yeeq<cck/E2}}=+RGI:O<cw1iuoz' );
define( 'SECURE_AUTH_KEY',   '<x(yHnko<d2dyy$(X(*:(,:]8Cze<DSQ)a;4B[@sJ[gz-5T9|D*:ij{wZ(y{azwp' );
define( 'LOGGED_IN_KEY',     '1(?!>2l0O*[[d_%)c-R=2raI:rLrJkP,^]~O@H>(}e:b_j ?}FM=[&qZ` >^cA>d' );
define( 'NONCE_KEY',         'II_qyX8wDx$gR#5scc`G!~[e5@b~lr4)-/6WT]2T_aC5S<h<m_2KtQc8ym9ieDoJ' );
define( 'AUTH_SALT',         'kk VII}>xV17{rf2Aow&t<)Alw>E@&v<F$0;$.G<~2Brd^%.5 {$pMH`8~cFqj2>' );
define( 'SECURE_AUTH_SALT',  '.01APtt]exCp$O=mjx0WJ$!@mht5nwxJ3J8Y<Rd(2~L^8a>{~Viu~Iu>$L@VsK({' );
define( 'LOGGED_IN_SALT',    '@1UY56rL=rOP%PYvj`F=W,{j!6MW#1~G`7h7w7F{U$6Io!J.)5OwzUtj`&oBq/U.' );
define( 'NONCE_SALT',        '6iNx#N@B00U0tlIHabMkH$,N?,s4ukJ=5OI|Zy MbJq_G{UE!-lF%[g7bgv*vD5V' );
define( 'WP_CACHE_KEY_SALT', 'iWj`*c[~Tn,b~47L}SEi8ly_<yAk<6wXd,h8TJ,Y,%4s5#~PR= >v^Y;)-/;m7(h' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
