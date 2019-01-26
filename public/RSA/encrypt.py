from Crypto.Util.number import *
from Crypto.PublicKey import RSA
import gmpy2

p = getPrime(512)
q = getPrime(512)
n = p*q
# size() from Crypto.Util.number tells the size of the number (in bits)
size1 = size(n)

e = 3
assert GCD(e, (p-1)*(q-1)) == 1
flag = #figure it out buddy!
m = bytes_to_long(flag)

ciphertext = long_to_bytes(pow(m, e, n))
obj1 = open("ciphertextz.txt",'w')
obj1.write(ciphertext)

publickey = RSA.construct((n, long(e)))
# Read this documentation on how to construct and import PEM files using pycrypto
# Public Key encryption: https://www.dlitz.net/software/pycrypto/api/2.6/toc-Crypto.PublicKey.RSA-module.html
# Construct PEM files: https://www.dlitz.net/software/pycrypto/api/2.6/Crypto.PublicKey.RSA-module.html#construct
# Import PEM files: https://www.dlitz.net/software/pycrypto/api/2.6/Crypto.PublicKey.RSA-module.html#importKey
f = open("publickeyz.pem",'w')
f.write(publickey.exportKey("PEM"))