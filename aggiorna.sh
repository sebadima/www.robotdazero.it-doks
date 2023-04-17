rsync -aAXv -e 'ssh -i ~/.ssh/id_rsa' ./public/* sebadima@www.robotdazero.it:/home/sebadima/docker/robotdazero-doks/  --rsync-path="sudo rsync"
