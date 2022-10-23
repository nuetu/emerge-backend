SONG_ID=$1
SONG_NAME=$2

 mkdir streaming/$SONG_ID
 ffmpeg -i uploads/$SONG_NAME -c:a aac -b:a 64k -vn -hls_list_size 0 streaming/$SONG_ID/$SONG_ID.m3u8
 rm uploads/$SONG_NAME