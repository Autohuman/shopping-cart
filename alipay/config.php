<?php
$config = array (
		//应用ID,您的APPID。
		'app_id' => "2016092400584834",

		//商户私钥
		'merchant_private_key' => "MIIEowIBAAKCAQEAvfLK+keb5CxtR0TCQcgKStMpbkwHjJAlHh3+FmTC0hbQWMWOmWKGvZlgGnzTkgiVTung6g5g6eaqRVCmujeJcQV+iJlsbHQiRIrI9gJ7kIwcURKO+NvcyiSa4XSUDBwzl+OhGh0qRlCfOebgPyPuZCmtTekA9cFh9H/f+/NNnAesSW0ZbQmRLDNYVl4o/+vKmMyqC9tNsfU90ktoGU7o26b22A0avTCioav9gAkM6Qu29ON1ng1KpMMxI6YFwFgqJyuxV/8GoKJmg2+G5A8riFUPrII78WGiFPYGck+siHwKTdBa8xjw1uxpq0u2RdvMowh8ev8biwrvA6sbXnNJ3wIDAQABAoIBAC0/tVLB1EUawD2GB7Cb8re4bdo0imfVvsHZ6zlyb2aUwLUk+r9XVTm9W8NzkQLswIS3+jhHjJaruEwi1lTt/fPKl0X7JnT/hVpGpXDVTpI0jlpRzXVDCumspqimmM35ueCo/Su3Xua5NfUZJrpj2NpLg1lX9D6W/rq766OdZhOQ50DeVGWqk/8xokGGnsN8Q10Nj1J2/LhssFEY6GEyxB3aHSCKsyAwwGK2hsF3zp7UkV5umsSq/BkUNtYL0xb+/Azzjloc38qxaTNxYLlDUBMYnxPdWuxNZFsBbNPrjZJ48+tviuZPPur2TdS+z8RTUpHPTDrXr6+kIXQ/psDZ5GECgYEA44JaVaFzQG4EqkF3ZxhmpFK87LGS6LahRyKnhkdkkZFY+nBPTXq/XeWo1J2iwGJQkiubFVwkv8Peiy6x3AYEPE5T8lf1RftsAI4wnoq1M2UtbnmryytmrYUiqvBeu0l9LziJcxLbcDoZXPBYBI0Jiimn51crnhytEI1TMZ+duXUCgYEA1bxKXWiP7QQkB9LFkFlV8XOhvPVupanoL6evAh8hJzPFPxE69D0Q6BBQZryDBrHWXErTFJPu9TMjfEUP0tb0+DYedtK6SoYaU8aAwgA2mBK+6VcaJl3ROpskwhG1n7/W8AAI0ZxA08+STH/5uFxagmgH3uTtGCuZNeNnA+hod4MCgYEAoOKIkS+X+gMTJ3ceQfiedSvRUCyO8CReTpiyESIhe1NmscuEOQ1JkNQcnSZQdm3P/l350JQVpMqVcKV3v1k924ukj6cl2vRePtJOjX8Xfp3ZD9vY4dbySFjy2CEdTKI+dYssoATAy086ql+ITseR7HNiuhUJ0kkDFcZrA5eViRUCgYAW2uuY0XWSgr7Xl1JI/USTbSn+asBKNsD9V5D/SRTifEa7V7xWIbGNHzF5yu636IxjkhzANpF25uEEiN4ITbQkVqUrT51cGrr1+mQKWrt7x4Virk29jIqzGaP0nLAvRPRW9an7wBmujKO4SncJn9aN21H8I762tvLLMGXzpQaGwQKBgAU0mllf4Hq5IdhZ8tx1+3buTluwVQGYFiNnTjSeIkvEKQBGWWqZzL7ACHIs8oljS5Q4RVhJ4hQyEjWmRf4mgFHYg3++ELS+8vy616+YVvO/5t11DfK+rUKT/L/sJJLmYjHpupssj76sqm9YN1YAmTLqvZ2/kRyXErlFabyzCZSy",

		//异步通知地址
		'notify_url' => "http://192.168.43.212:8080/Alipay/notify_url.php",

		//同步跳转
		'return_url' => "http://192.168.43.212:8080/Alipay/return_url.php",

		//编码格式
		'charset' => "UTF-8",

		//签名方式
		'sign_type'=>"RSA2",

		//支付宝网关
		'gatewayUrl' => "https://openapi.alipaydev.com/gateway.do",

		//支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
		'alipay_public_key' => "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtp+KF3wxW2UpHBhBJp6oX3POMGa3c+vjM/OPsOq+NnWH5tkoGI8VO20+cZ4eJXmXY8Xyw4dSSF+NSxtpanQ502nejwDmtkch7Fe8+nCXkCByVYVTCKlxKlQbdvbjF6T1DYgMRooYN+HcyAEvaZIxNv4XVJOoUCMjJvrhiR9R2QIKMmI2q8rCod6QIxdPToC7HlGO4Ja8/MiBq9GsesZ1eHYYCngF7442Iz0ANuJ3qVuJr21Lm1yMknPxHZfoiCwt1QScNY/xwsCTsfpmdjBKxBQWCV1s+x6Qrr3ZFipNahWBACFbmTFKDZHVXrVP+bGMSRJqIPw8+w6CvCigubbAgQIDAQAB",
);
